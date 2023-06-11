import { useEffect } from 'react'
import useSWR from 'swr'

export default function ViewCounter({ slug, className, blogPage = false }) {
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (blogPage) {
      registerView()
    }
  }, [blogPage, slug])

  return <span className={className}>{}</span>
}
