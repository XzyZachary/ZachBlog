import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { ShortDescription } from '@/components/homepage/ShortDescription'
import { BlogLinks } from '@/components/homepage/BlogLinks'
import { TypedBios } from '@/components/homepage/TypedBios'
import { Greeting } from '@/components/homepage/Greeting'
import Heading from '@/components/homepage/Heading'
import ProfileCard from '@/components/ProfileCard'
import { allBlogs } from 'contentlayer/generated'
import { FeaturedPosts } from '@/components/homepage/FeaturedPosts'
import type { Blog } from 'contentlayer/generated'


export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)
  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
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
                <span className="mr-2">Happy reading</span>
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
