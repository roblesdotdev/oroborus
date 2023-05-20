import { Balancer } from 'react-wrap-balancer'
import { ArrowRight, GithubIcon } from '~/components/shared/icons'
import { siteConfig } from '~/config/site'

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
            <span>
              Star on Github <b>1k</b>
            </span>
            <span className="ml-2 flex items-center justify-center rounded-full bg-white/10 p-1">
              <ArrowRight className="h-3 w-3" />
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
          <button className="rounded-md border-2 border-canvas-primary px-6 py-3 transition hover:bg-canvas-primary">
            Explore
          </button>
        </section>
      </div>
    </div>
  )
}
