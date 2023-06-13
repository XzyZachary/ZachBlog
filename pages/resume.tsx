import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import type { MdxFileData } from '@/types'

export async function getStaticProps({ locale, defaultLocale, locales }) {
    const otherLocale = locale !== defaultLocale ? locale : ''
    const resumeData = await getFileBySlug('authors', 'resume', otherLocale)
    return { props: { resumeData }}
}

export default function Resume({ resumeData }: { resumeData: MdxFileData }) {
    const { mdxSource, frontMatter } = resumeData;
    return (
        <MDXLayoutRenderer  layout={frontMatter.layout} mdxSource={mdxSource} frontMatter={frontMatter} />
    )
}