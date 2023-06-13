// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps = async ({ locale, defaultLocale, locales }) => {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const authorDetails = await getFileBySlug('authors', 'default', otherLocale)
  return { props: { authorDetails, availableLocales: locales } }
}

export default function About({ authorDetails, availableLocales }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails
  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      availableLocales={availableLocales}
      frontMatter={frontMatter}
    />
  )
}
