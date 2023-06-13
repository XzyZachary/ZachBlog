import { Twemoji } from '@/components/Twemoji'
import siteMetadata from '@/data/siteMetadata'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function Heading() {
  const router = useRouter()
  const { t } = useTranslation();
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      {t('common:21')} <span className="font-medium">{siteMetadata.fullName[router.locale]}</span> - {t('common:16')}{' '}
      <span className="font-medium">{t('common:17')}</span> {t('common:20')}{' '}
      <span className="font-medium">{t('common:18')}, {t('common:19')}</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="china" />
      </span>
    </h1>
  )
}
