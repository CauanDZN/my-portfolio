import { 
  Html5PlainIcon, Css3PlainIcon, JavascriptPlainIcon, ReactOriginalIcon, NextjsLineIcon, 
  KotlinPlainIcon, SwiftPlainIcon, TailwindcssPlainIcon,
  NodejsPlainIcon, JavaPlainIcon, AmazonwebservicesOriginalIcon, PostgresqlPlainIcon, 
  DockerPlainIcon, FirebasePlainIcon, FlutterPlainIcon, 
  LaravelPlainIcon, MongodbPlainIcon, NestjsPlainIcon, PhpPlainIcon, PythonPlainIcon 
} from 'react-devicons';

import colors from 'tailwindcss/colors';

interface TechItemProps {
  icon: React.ReactNode;
  text: string;
}

const TechItem: React.FC<TechItemProps> = ({ icon, text }) => (
  <li className="animate-infiniteScroll">
    <div className="h-16 w-[95%] overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-slate-700 to-slate-700/30 bg-origin-border">
      <div className={`flex h-16 items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-slate-900/40 text-slate-300 transition ease-in-out hover:border-0 hover:bg-indigo-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:text-indigo-800`}>
        {icon}
        <span className="select-none text-indigo-200">{text}</span>
      </div>
    </div>
  </li>
);

export function InfiniteScroll() {
  const techList1 = [
    { icon: <Html5PlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "HTML" },
    { icon: <Css3PlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "CSS" },
    { icon: <JavascriptPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "JavaScript" },
    { icon: <ReactOriginalIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "ReactJS" },
    { icon: <ReactOriginalIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "React Native" },
    { icon: <NextjsLineIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "NextJS" },
    { icon: <TailwindcssPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "TailwindCSS" },
  ];

  const techList2 = [
    { icon: <NodejsPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "NodeJS" },
    { icon: <JavaPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Java" },
    { icon: <KotlinPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Kotlin" },
    { icon: <SwiftPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Swift" },
    { icon: <AmazonwebservicesOriginalIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "AWS" },
    { icon: <PostgresqlPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "PostgreSQL" },
    { icon: <DockerPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Docker" },
  ];

  const techList3 = [
    { icon: <FlutterPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Flutter" },
    { icon: <FirebasePlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Firebase" },
    { icon: <LaravelPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Laravel" },
    { icon: <MongodbPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "MongoDB" },
    { icon: <NestjsPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "NestJS" },
    { icon: <PhpPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "PHP" },
    { icon: <PythonPlainIcon className="mobile:h-8 mobile:w-8 desktop:h-10 desktop:w-10" color={colors.indigo['300']} />, text: "Python" },
  ];

  return (
    <>
      <ul className="mt-10">
        {techList1.map((tech, index) => (
          <TechItem key={index} icon={tech.icon} text={tech.text} />
        ))}
      </ul>
      <ul className="alt mt-3">
        {techList2.map((tech, index) => (
          <TechItem key={index} icon={tech.icon} text={tech.text} />
        ))}
      </ul>
      <ul className="mt-3">
        {techList3.map((tech, index) => (
          <TechItem key={index} icon={tech.icon} text={tech.text} />
        ))}
      </ul>
    </>
  );
}
