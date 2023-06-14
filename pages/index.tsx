import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { ShortDescription } from '@/components/homepage/ShortDescription'
import { BlogLinks } from '@/components/homepage/BlogLinks'
import { TypedBios } from '@/components/homepage/TypedBios'
import { Greeting } from '@/components/homepage/Greeting'
import Heading from '@/components/homepage/Heading'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ProfileCard from '@/components/ProfileCard'
import { useRouter } from 'next/router'
import { FeaturedPosts } from '@/components/homepage/FeaturedPosts'
import type { Blog } from 'contentlayer/generated'
import useTranslation from 'next-translate/useTranslation'


export const getStaticProps = async ({ locale, defaultLocale, locales }) => {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const allBlogs = await getAllFilesFrontMatter('blog', otherLocale)
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)
  return { props: { posts, availableLocales: locales } }
}

export default function Home({ posts, availableLocales }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { t } =  useTranslation()
  return (
    <>
      <PageSEO title={siteMetadata.title[router.locale]} description={siteMetadata.description[router.locale]} 
        availableLocales={availableLocales} />
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2">
            <Greeting />
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
              <TypedBios />
              <ShortDescription />
              <BlogLinks />
              <p className="my-8 flex">
                <span className="mr-2">{t('common:31')}</span>
                {/* <Twemoji emoji="clinking-beer-mugs" /> */}
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      <FeaturedPosts posts={posts} />
    </>
  )
}
