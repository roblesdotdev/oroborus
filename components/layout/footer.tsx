import { siteConfig } from '~/config/site'

export default function Footer() {
  return (
    <footer className="mt-32 py-8">
      <p className="text-center text-sm text-fg-muted">
        {siteConfig.name} by{' '}
        <a
          href="https://roblesdotdev.fly.dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-fg hover:underline"
        >
          Aldo R. Robles
        </a>
      </p>
    </footer>
  )
}
