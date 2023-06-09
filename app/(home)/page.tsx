import { Balancer } from 'react-wrap-balancer'
import {
  ArrowRightIcon,
  EslintIcon,
  GithubIcon,
  NextJSIcon,
  PlanetscaleIcon,
  PrettierIcon,
  PrismaIcon,
  ReactJSIcon,
  ShieldIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
} from '~/components/shared/icons'
import Button from '~/components/shared/ui/button'
import { siteConfig } from '~/config/site'
import { VERCEL_DEPLOY_URL } from '~/lib/constants'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="mx-auto w-full max-w-7xl">
        <section className="mt-16 flex flex-col items-center justify-center pb-16">
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.repoUrl}
            className="flex h-7 items-center gap-2 whitespace-nowrap rounded-full bg-canvas-primary px-6 text-[13px] hover:opacity-90"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Star on Github</span>
            <span className="ml-2 flex items-center justify-center rounded-full bg-white/10 p-1">
              <ArrowRightIcon className="h-3 w-3" />
            </span>
          </a>
          <h1 className="mb-4 mt-6 max-w-3xl text-center text-4xl font-medium delay-[0.15s] md:text-7xl">
            <Balancer>Take your projects to the next level</Balancer>
          </h1>
          <p className="mb-8 max-w-3xl text-center text-fg-muted delay-[0.25s] md:text-xl">
            <Balancer>
              Simplify your development process and create{' '}
              <span className="whitespace-nowrap">high-quality</span> web
              applications quickly and efficiently.
            </Balancer>
          </p>
          <Button href="/dashboard" variant="outline">
            <div className="flex items-center gap-2">
              <span>Get Started</span>
            </div>
          </Button>
        </section>

        <section className="pb-16 md:mt-32">
          <p className="mx-auto text-center text-fg/90 md:mb-16 md:max-w-xl md:text-lg lg:text-xl">
            The purpose of this project is to explore and leverage the new
            features of{' '}
            <span className="font-medium text-gray-200">Next.js 13</span> with
            app dir.
          </p>
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="mx-auto grid max-w-5xl grid-cols-2 justify-center gap-x-4 gap-y-9 text-fg-muted md:grid-cols-3 md:place-items-center">
            {siteFeatures.map(feat => (
              <div
                key={feat.title}
                className="flex flex-col gap-2 md:max-w-xs lg:p-4"
              >
                {feat.icon}
                <h2 className="line-clamp-2 text-sm md:text-lg">
                  <span className="font-medium text-fg">{feat.title}</span>{' '}
                  {feat.description}
                </h2>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 pb-8 md:mt-32">
          <p className="mx-auto text-center text-fg/90 md:max-w-xl md:text-lg lg:mb-8 lg:text-xl">
            The code can be found on{' '}
            <a
              className="font-medium hover:underline"
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            , or you can deploy your own instance on Vercel with just one click.
          </p>
          <div className="flex items-center justify-center pt-8 lg:pt-0">
            <a
              className="flex items-center justify-center gap-2 rounded-md px-6 py-3 font-medium outline-none ring-2 ring-inset ring-canvas-primary transition hover:bg-canvas-primary focus:ring-2 focus:ring-fg-muted focus:ring-offset-2 focus:ring-offset-canvas disabled:pointer-events-none disabled:opacity-60"
              href={VERCEL_DEPLOY_URL}
              target="_blank"
              rel="noreferrer"
            >
              <VercelIcon className="h-4 w-4" />
              <span>Deploy to vercel</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

const siteFeatures = [
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
