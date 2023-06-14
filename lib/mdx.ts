import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGFM from 'remark-gfm'
import { visit } from 'unist-util-visit'
import { TOKEN_CLASSNAME_MAP } from '@/constant'
import type { MdxFileData, MdxFrontMatter, TOC, UnistNodeType } from '@/types'
import { dateSortDesc } from '@/utils/date'
import { getAllFilesRecursively } from './files'
import { remarkCodeBlockTitle } from './remark-code-block-title'
import { remarkImgToJsx } from './remark-img-to-jsx'
import { remarkTocHeading } from './remark-toc-heading'


const root = process.cwd()

export function getFiles(type, otherLocale = '') {
  const prefixPaths = path.join(root, 'data', type)
  const files =
    otherLocale === ''
      ? getAllFilesRecursively(prefixPaths).filter((path) => (path.match(/\./g) || []).length === 1)
      : getAllFilesRecursively(prefixPaths).filter((path) => path.includes(`.${otherLocale}.md`))

  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
  // return slug.replace(/\.(mdx|md)/, '')
  // take the main root of slug e.g. post-name in post-name.en.mdx
  return slug.split('.')[0]
}

export async function getFileBySlug(type: string, slug: string,  otherLocale = ''): Promise<MdxFileData> {
  const root = process.cwd()
  const mdxPath = otherLocale == '' ? path.join(root, 'data', type, `${slug}.mdx`) : path.join(root, 'data', type, `${slug}.${otherLocale}.mdx`);
  const mdPath = otherLocale == '' ? path.join(root, 'data', type, `${slug}.md`) : path.join(root, 'data', type, `${slug}.${otherLocale}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  /**
   * Point esbuild directly at the correct executable for the current platform
   * Ref: https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
   */
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const toc: TOC[] = []
  const { frontmatter, code } = await bundleMDX<MdxFrontMatter>({
    source,
    cwd: path.join(process.cwd(), 'components'),
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
    mdxOptions(options) {
      /**
       * This is the recommended way to add custom remark/rehype plugins.
       * The syntax might look weird, but it protects you in case we add/remove plugins in the future.
       * Ref: https://github.com/kentcdodds/mdx-bundler#mdxoptions
       */
      options.remarkPlugins = [
        ...(options.remarkPlugins || []),
        [remarkTocHeading, { exportRef: toc }],
        remarkGFM,
        remarkCodeBlockTitle,
        remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
        () => {
          return (tree) => {
            visit(tree, 'element', (node: UnistNodeType) => {
              const [token, type] = node.properties.className || []
              if (token === 'token') {
                node.properties.className = [TOKEN_CLASSNAME_MAP[type]]
              }
            })
          }
        },
      ]
      return options
    },
  })

  return {
    toc,
    mdxSource: code,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
    },
  }
}


// otherLocale === locale if locale !== defaultLocale
export async function getAllFilesFrontMatter(folder, otherLocale) {
  const prefixPaths = path.join(root, 'data', folder)

  const files =
    otherLocale === ''
      ? getAllFilesRecursively(prefixPaths).filter((path) => (path.match(/\./g) || []).length === 1)
      : getAllFilesRecursively(prefixPaths).filter((path) => path.includes(`.${otherLocale}.md`))

  // Check if the file exist in the otherlocale. If not, fallback to defaultLangage

  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}