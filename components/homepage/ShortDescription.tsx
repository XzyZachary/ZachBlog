
import useTranslation from 'next-translate/useTranslation'

export function ShortDescription() {
  
  const { t } = useTranslation();
    return (
      <div className="mb-8 mt-4">
        <p>{t('common:23')}</p>
        <p>{t('common:24')}</p>
        <p>{t('common:25')}</p>
        <p>{t('common:26')}</p>
      </div>
    )
  }
  