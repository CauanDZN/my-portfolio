import { Book, Briefcase } from 'phosphor-react'
import { calcularIdade } from '../utils/age'
import colors from 'tailwindcss/colors'

import ProfileImage from '../assets/profile.png'

export function AboutMeSection() {
  let dataNascimentoUsuario = new Date(2005, 9, 3);
  let idadeUsuario = calcularIdade(dataNascimentoUsuario);
  const anoAtual = new Date().getFullYear();
  const anoInicioExperiencia = 2022;
  const anosExperiencia = anoAtual - anoInicioExperiencia

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      className="relative w-full items-start pb-20 pt-20 mobile:flex mobile:flex-col mobile:gap-6 mobile:px-4 desktop:grid desktop:grid-cols-2 desktop:gap-16 desktop:px-16"
    >
      <img
        src={ProfileImage}
        alt="Foto de Perfil - Cauan Victor"
        className="sticky rounded-2xl desktop:top-10"
      />
      <div className="flex w-full flex-col items-start justify-start mobile:mt-10 mobile:gap-6">
        <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-center text-5xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          Sobre mim
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-once="true"
          className="text-lg text-slate-400"
        >
          Olá! Meu nome é{' '}
          <strong className="text-slate-100">Cauan Victor</strong>, tenho
          <strong className="text-slate-100"> {idadeUsuario} anos</strong> e sou um
          <strong className="text-slate-100"> desenvolvedor fullstack. </strong>
          Tenho {anosExperiencia} anos de experiência e possuo conhecimentos sólidos em{' '}
          <strong className="text-slate-100">
            HTML, CSS, JavaScript, ReactJS, TypeScript, Java, NodeJS, PHP, Git,
            GitHub, NextJS, Styled Components, TailwindCSS, Figma, Firebase, AWS, 
            Docker, Kubernetes, Jenkins, Scrum, Kanban e muito mais.{' '}
          </strong>
          É, muitos dizem que sou um verdadeiro <strong className="text-slate-100">canivete suiço</strong>...
        </p>
        <div className="flex flex-col gap-12">
          <h1 className="mt-5 text-2xl font-medium leading-tight text-zinc-100">
            Experiências e Formação
          </h1>
          <div className="flex items-start justify-start gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Briefcase
                  size={24}
                  color={colors.slate['100']}
                  weight="bold"
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Briefcase
                  size={24}
                  color={colors.slate['100']}
                  weight="bold"
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book 
                  size={24} 
                  color={colors.slate['100']} 
                  weight="bold" 
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book 
                  size={24} 
                  color={colors.slate['100']} 
                  weight="bold" 
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book 
                  size={24} 
                  color={colors.slate['100']} 
                  weight="bold" 
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
              <div className="flex items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 p-4 shadow-[0px_10px_80px_4px_rgba(99,102,241,.6)]">
                <Book 
                  size={24} 
                  color={colors.slate['100']} 
                  weight="bold" 
                />
              </div>
              <div className="h-[165px] w-1 rounded-md bg-gradient-time-line"></div>
            </div>
            <div className="flex flex-col gap-14">
              <h2 className="mt-3 inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Fevereiro de 2024
              </h2>
              <div>
                <h2 className="text-xl leading-tight text-slate-100">
                  Estagiário de TI
                </h2>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Digital College Brasil
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-12 desktop:-mt-4 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Agosto de 2023 - Novembro de 2023
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Desenvolvedor Full-stack
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Normalabs
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-3 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Fevereiro de 2024
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Bacharel em Ciência da Computação
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Faculdade Descomplica
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-4 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Junho de 2023 - Junho de 2024
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Desenvolvimento Fullstack
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Digital College Brasil
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-3 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Janeiro de 2022
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Estudante em desenvolvimento Full-stack
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  Rocketseat
                </p>
              </div>
              <h2 className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-2xl font-semibold leading-tight tracking-tighter text-transparent mobile:-mt-16 desktop:-mt-3 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                Janeiro de 2021 - Dezembro de 2023
              </h2>
              <div>
                <h1 className="text-xl leading-tight text-zinc-100">
                  Técnico em Redes de Computadores
                </h1>
                <p className="mt-2 text-slate-400 mobile:pb-10 mobile:text-base desktop:text-lg">
                  EEEP Leonel de Moura Brizola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
