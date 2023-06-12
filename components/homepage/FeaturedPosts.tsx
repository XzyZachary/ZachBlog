import ViewCounter from '@/components/ViewCounter'
import Tag from '@/components/Tag'
import Link from '../Link'
import formatDate from '@/lib/utils/formatDate'
const MAX_DISPLAY = 3

export function FeaturedPosts({ posts }) {
    return (
        <div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <ul>
                {!posts.length && 'No posts found.'}
                {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                    const { slug, date, title, summary, tags } = frontMatter
                    return (
                        <li key={slug} className="group flex cursor-pointer bg-transparent bg-opacity-20 px-2 py-6 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <article>
                                <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>{formatDate(date)}</time>
                                            {' • '}
                                            <ViewCounter className="mx-1" slug={slug} />
                                            views
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-4">
                                        <div className="space-y-1">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={`/blog/${slug}`}
                                                        className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                                                    >
                                                        {title}
                                                    </Link>
                                                </h2>
                                            </div>
                                            <div className="flex flex-wrap">
                                                {tags.map((tag) => (
                                                    <Tag key={tag} text={tag} />
                                                ))}
                                            </div>
                                            <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                                                {summary}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )
                })}
            </ul>
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6 mt-10">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="all posts"
                    >
                        <span data-umami-event="all-posts">All Posts &rarr;</span>
                    </Link>
                </div>
            )}
        </div>
    )
}