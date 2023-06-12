import clsx from 'clsx'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

const Header = ({ onToggleNav }: { onToggleNav: () => void }) => {
  const router = useRouter()
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
                  {link.title}
                </Link>
              )
            })}
          </div>

          <ThemeSwitch />
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            data-umami-event="mobile-nav-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
