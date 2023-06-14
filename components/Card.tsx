import useTranslation from 'next-translate/useTranslation'
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  const { t } = useTranslation();
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="flex h-full flex-col overflow-hidden rounded-md border border-gray-400 border-opacity-60 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-60"
          width={1088}
          height={612}
        />
        <div className="flex grow flex-col justify-between space-y-8 p-6">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <span data-umami-event="project-title-link">{title}</span>
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              {t("projects:learn")} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card