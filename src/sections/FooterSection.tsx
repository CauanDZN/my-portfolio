import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react'

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  return (
    <section className="flex items-center justify-between gap-8 py-16 mobile:flex-col mobile:px-4 desktop:flex-row desktop:px-16">
      <div className="flex flex-col gap-3 mobile:items-center desktop:items-start">
        <p className="text-2xl text-slate-100">
          &copy; {currentYear} -{' '}
          <span className="font-semibold"> Cauan Victor</span>
        </p>
        <p className="flex items-center gap-3 text-slate-500">
          <Envelope size={24} className="text-indigo-400" />
          f.cauan.victor@gmail.com
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/francisco-cauan-victor/"
          aria-label="Link para Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={24} className="text-indigo-400" />
        </a>
        <a
          href="https://instagram.com/cauanvictoroficial"
          aria-label="Link para Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo size={24} className="text-indigo-400" />
        </a>
        <a
          href="https://github.com/CauanDZN"
          aria-label="Link para Github"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={24} className="text-indigo-400" />
        </a>
      </div>
    </section>
  )
}
