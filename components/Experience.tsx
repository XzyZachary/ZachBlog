import Link from '@/components/Link'

export default function Experience({
  title,
  company,
  range,
  url,
  text1,
  text2,
  text3,
  text4,
}: any) {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>
        <span className="text-primary-color-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
      <div className="p-2">
        <div>
          <span className="mr-2 text-lg text-primary-color-500">&#8227;</span>
          <span className="text-gray-500 dark:text-gray-400">{text1}</span>
        </div>
        <div>
          <span className="mr-2 text-lg text-primary-color-500">&#8227;</span>
          <span className="text-gray-500 dark:text-gray-400">{text2}</span>
        </div>
        {text3 && (
          <div>
            <span className="mr-2 text-lg text-primary-color-500">&#8227;</span>
            <span className="text-gray-500 dark:text-gray-400">{text3}</span>
          </div>
        )}
        {text4 && (
          <div>
            <span className="mr-2 text-lg text-primary-color-500">&#8227;</span>
            <span className="text-gray-500 dark:text-gray-400">{text4}</span>
          </div>
        )}
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-500">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}
