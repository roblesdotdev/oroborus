import {
  EslintIcon,
  NextJSIcon,
  PrettierIcon,
  PrismaIcon,
  ReactJSIcon,
  TailwindIcon,
  TypescriptIcon,
  ShieldIcon,
  PlanetscaleIcon,
} from '~/components/shared/icons'

export const siteFeatures = [
  {
    title: 'Next.js 13.',
    icon: <NextJSIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'App dir, routing and more.',
  },
  {
    title: 'React 18.',
    icon: <ReactJSIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'Server and client components.',
  },
  {
    title: 'Prisma.',
    icon: (
      <div className="flex items-center gap-2 lg:gap-4">
        <PrismaIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        <PlanetscaleIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      </div>
    ),
    description: 'Database ORM. PlanetScale serverless MySQL.',
  },
  {
    title: 'Authentication.',
    icon: <ShieldIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'NextAuth with middlewares.',
  },
  {
    title: 'Tailwindcss.',
    icon: <TailwindIcon className="h-4 w-4 lg:h-6 lg:w-6" />,
    description: 'Utility-first CSS framework.',
  },
  {
    title: 'Static Analysis.',
    icon: (
      <div className="flex items-center gap-2 lg:gap-4">
        <TypescriptIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        <EslintIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        <PrettierIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      </div>
    ),
    description: 'Typescript, eslint, prettier and more.',
  },
]
