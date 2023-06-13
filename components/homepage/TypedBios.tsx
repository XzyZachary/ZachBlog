import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import useTranslation from 'next-translate/useTranslation'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  const el = useRef(null)
  const { t } = useTranslation()
  const typed = useRef(null)
  useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          {t('common:1')} <b className="font-medium">Zachary</b> {t('common:2')}.
        </li>
        <li>{t('common:3')}</li>
        <li>
          {t('common:4')}<b className="font-medium">{t('common:5')}</b>.
        </li>
        <li>
          {t('common:6')} <b className="font-medium">{t('common:7')}</b>.
        </li>
        <li>
          {t('common:8')} <b className="font-medium">Java</b>.
        </li>
        <li>{t('common:10')}</li>
        <li>{t('common:11')}</li>
        <li>{t('common:12')}</li>
        <li>
          {t('common:13')}{' '}
          <b className="font-medium">{t('common:14')}</b>
          <Twemoji emoji="cat" />.
        </li>
        <li>
          {t('common:15')}
          <span className="ml-1">
            <Twemoji emoji="basketball" />,
            <Twemoji emoji="man-swimming" />
          </span>
          .
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
