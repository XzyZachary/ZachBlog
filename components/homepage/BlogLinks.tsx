// import siteMetadata from '@/data/siteMetadata'
import Link from '../Link'
import { Twemoji } from '../Twemoji'
import useTranslation from 'next-translate/useTranslation'

export function BlogLinks() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-1.5">
      <Link href="/projects" className="hover:underline">
        <Twemoji emoji="hammer-and-wrench" />
        <span data-umami-event="home-link-projects" className="ml-1.5">
          {t('common:27')}
        </span>
      </Link>
      <Link href="/blog" className="hover:underline">
        <Twemoji emoji="memo" />
        <span data-umami-event="home-link-blog" className="ml-1.5">
          {t('common:28')}
        </span>
      </Link>
      {/* <Link href="/snippets" className="hover:underline">
        <Twemoji emoji="dna" />
        <span data-umami-event="home-link-snippets" className="ml-1.5">
          My snippets collection
        </span>
      </Link> */}
      <Link href="/about" className="hover:underline">
        <Twemoji emoji="face-with-monocle" />
        <span data-umami-event="home-link-about" className="ml-1.5">
          {t('common:29')}
        </span>
      </Link>
      <Link href="/resume" className="hover:underline">
        <Twemoji emoji="briefcase" />
        <span data-umami-event="home-link-resume" className="ml-1.5">
          {t('common:30')}
        </span>
      </Link>
    </div>
  )
}
