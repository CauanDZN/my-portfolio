import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export function AnimatedHeading({ children, className }: Props) {
  useEffect(() => {
    const title = document.querySelector('.title') as HTMLElement

    setTimeout(() => {
      title.classList.add('animate-reveal')
    }, 2000)
  }, [])

  return (
    <div
      className={` ${className} mobile:leading-sm relative overflow-hidden font-semibold leading-none tracking-tighter text-zinc-100 mobile:text-[3.5rem] desktop:text-xxl desktop:leading-lg`}
    >
      <h1 className="title m-0 overflow-hidden leading-tight">
        <span className="block animate-reveal">{children}</span>
      </h1>
    </div>
  )
}
