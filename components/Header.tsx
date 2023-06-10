import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
            {`~${router.asPath}`}{' '}
            <Typewriter
              options={{
                strings: [],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="link-underline rounded px-2 py-1 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
