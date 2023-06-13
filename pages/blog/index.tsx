import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { useRouter } from 'next/router'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs) as Blog[]
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function BlogPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author[router.locale]}`} description={siteMetadata.description[router.locale]} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
