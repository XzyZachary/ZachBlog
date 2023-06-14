import clsx from 'clsx'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'
import useTranslation from 'next-translate/useTranslation'
// import useTranslation from 'next-translate/useTranslation'
const Header = () => {
  // const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router
  const changeLanguage = () => {
    const _locale = locale == 'en' ? 'cn' : 'en';
    router.push(router.asPath, router.asPath, { locale: _locale })
  }
  const { t } = useTranslation(); 
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 overflow-x-hidden bg-white/75 py-3 backdrop-blur dark:bg-dark/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label="Zachary's blog">
            <div className="item-center flex justify-between" data-umami-event="logo">
              <div className="mr-3 flex items-center justify-center">
                <NextImage
                  src="/static/images/my.jpg"
                  alt="Zachary's Blog logo"
                  width={45}
                  height={45}
                  className="rounded-full"
                ></NextImage>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden space-x-2 sm:block">
            {headerNavLinks.map((link) => {
              const className = clsx(
                'link-underline rounded inline-block rounded font-medium text-gray-900 dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
                router.pathname === link.href
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              )
              return (
                <Link key={link.title} href={link.href} className={className} data-umami-event={`nav-${link.href.replace('/', '')}`}>
                  {t(`headerNavLinks:${link.title}`)}
                </Link>
              )
            })}
          </div>
          <button className="ml-1 mr-1 h-8 w-8 rounded p-1 pt-1.5 sm:ml-4"
            onClick={changeLanguage}
          >
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M846.04 866.77c-17.08 2.03-32.57-10.18-34.59-27.26-0.22-1.9-0.27-3.81-0.15-5.71v-123c0-33.73-22.17-33.73-30.53-33.73-21.28-0.46-38.91 16.43-39.36 37.72-0.01 0.46-0.01 0.92 0 1.37v117.66c-0.76 18.9-16.71 33.61-35.61 32.84-17.83-0.72-32.12-15.01-32.84-32.84V647.68c-1.23-17.23 11.74-32.19 28.97-33.41 1.69-0.12 3.39-0.1 5.08 0.05a31.953 31.953 0 0 1 31.33 17.76 89.435 89.435 0 0 1 54.99-17.76c54.11 0 86.45 33.59 86.45 90.03V833.8a32.25 32.25 0 0 1-8.88 23.72 34.026 34.026 0 0 1-24.82 9.33l-0.04-0.08z m-233.12-7.46h-134.7c-42.77 0-61.85-18.96-61.85-61.57V608.07c0-42.52 19.09-61.57 61.85-61.57h128.74c17.92 0 32.45 14.53 32.45 32.45s-14.53 32.45-32.45 32.45H490.73c-1.22-0.08-2.45 0.09-3.6 0.5 0.13 0-0.15 0.8-0.15 2.89v52.58h106c16.33-1.66 30.91 10.24 32.57 26.57 0.17 1.68 0.2 3.37 0.08 5.06 0.98 16.66-11.73 30.97-28.4 31.95-1.41 0.08-2.83 0.07-4.24-0.05H486.9V791c-0.04 1.06 0.08 2.13 0.35 3.15 1.12 0.15 2.25 0.23 3.38 0.24h122.31c16.96-1.07 31.58 11.81 32.65 28.76 0.07 1.16 0.08 2.33 0.02 3.5 1.35 16.68-11.07 31.3-27.75 32.65-1.64 0.13-3.28 0.13-4.92 0h-0.02zM327.54 482.85c-17.36 2.36-33.34-9.8-35.7-27.16-0.3-2.21-0.37-4.44-0.2-6.67V370.5h-85.27c-45.86 0-66.31-20.52-66.31-66.31v-93.87c0-45.58 20.52-65.9 66.31-65.9h85.27v-31.53c-1.38-17.11 11.37-32.11 28.48-33.49 1.92-0.15 3.84-0.13 5.76 0.07 30.26 0 36.63 18.17 36.63 33.42v31.59h86.09c45.86 0 66.33 20.34 66.33 65.88v93.89c0 45.86-20.52 66.29-66.33 66.29h-86.05v78.52c1.25 17.47-11.9 32.65-29.37 33.91-1.88 0.13-3.76 0.1-5.63-0.1v-0.02zM217.21 211.27c-6.47 0-7.07 0.6-7.07 7.07v78.2c0 6.53 0.6 7.15 7.07 7.15h74.43v-92.42h-74.43z m145.35 92.38h75.29c6.29 0 7.09-0.8 7.09-7.07v-78.25c0-6.29-0.8-7.09-7.09-7.09h-75.31v92.42h0.02z m151.42 655.91C266.43 958.82 66.36 757.55 67.1 510c0.1-35 4.31-69.86 12.52-103.88 4.81-19 23.92-30.68 43.03-26.29 19.1 4.61 30.86 23.81 26.29 42.91-48.93 202.33 75.42 406.01 277.75 454.94a376.924 376.924 0 0 0 87.29 10.56c19.69 0.02 35.64 15.99 35.63 35.69-0.02 19.67-15.96 35.61-35.63 35.63z m398.49-310.05c-19.69 0-35.66-15.96-35.66-35.65 0-2.95 0.37-5.9 1.09-8.76 51.31-201.82-70.7-407.02-272.52-458.33-29.89-7.6-60.59-11.5-91.43-11.62-19.68 0-35.64-15.95-35.64-35.63 0-19.68 15.95-35.64 35.63-35.64h0.01c247.57 0.76 447.65 202.08 446.89 449.65-0.11 36.8-4.76 73.44-13.83 109.1-4 15.8-18.23 26.88-34.54 26.88z" fill="#333333" p-id="2298"></path></svg>
          </button>
          <ThemeSwitch />

        </div>
      </div>
    </header>
  )
}

export default Header
