import { useEffect, useState } from 'react'
import Link from './Link'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')
  useEffect(() => {
    setCurrentTime(() => {
      const date = new Date()
      return date.toLocaleString('default', { weekday: 'long' })
    })
  }, [])
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="mb2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="/" className="link-underline">
              Zachary{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/" className="link-underline">
              Have a good {currentTime}!
            </Link>
          </div>
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
