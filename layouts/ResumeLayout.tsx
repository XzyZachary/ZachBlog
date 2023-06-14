import { PageSEO } from '@/components/SEO'
import { ScrollTopButton } from '@/components/ScrollTopButton'
import siteMetadata from '@/data/siteMetadata'
import type { ResumeLayoutProps } from '@/types'
import useTranslation from 'next-translate/useTranslation'

export function ResumeLayout({ children }: ResumeLayoutProps) {
  const { t } = useTranslation();
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.fullName} - ${t("resume:description")}`}
        description={`Resume - ${siteMetadata.fullName} - ${t("resume:description")}`}
      />
      <ScrollTopButton />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            { t("resume:resume") }
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t("resume:description")}</p>
        </div>
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="prose prose-lg max-w-none pb-8 pt-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}

export default ResumeLayout
