import { Twemoji } from '@/components/Twemoji'
import siteMetadata from '@/data/siteMetadata'

export default function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">{siteMetadata.fullName}</span> - a dedicated{' '}
      <span className="font-medium">Front-End Engineer</span> in{' '}
      <span className="hidden font-medium">Shanghai, China</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="china" />
      </span>
    </h1>
  )
}