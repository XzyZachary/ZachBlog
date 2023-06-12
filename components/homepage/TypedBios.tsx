import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  const el = useRef(null)
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
          I'm aliased as <b className="font-medium">Zachary</b> at work.
        </li>
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Xu Hui, Shanghai</b>.
        </li>
        <li>
          I was born in the beautiful city <b className="font-medium">Yan Cheng</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Java</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building ssr and lowcode.</li>
        <li>I work mostly with JS/TS technologies.</li>
        <li>
          I'm a cat-person, raised an American shorthair cat named{' '}
          <b className="font-medium">Bugatti</b>
          <Twemoji emoji="cat" />.
        </li>
        <li>
          I'm a sport-guy. I love
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
