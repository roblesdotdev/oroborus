import Link from 'next/link'
import { siteConfig } from '~/config/site'
import NavAuth from '../nav-auth'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 flex h-16 w-full flex-col justify-center bg-canvas/5 backdrop-blur">
      <nav>
        <ul className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 text-sm">
          <li>
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Brand logo"
                  width={30}
                  height={30}
                />
                <h1 className="text-base font-medium">{siteConfig.name}</h1>
              </div>
            </Link>
          </li>
          <li className="ml-auto flex items-center gap-2">
            {/* @ts-expect-error server side components */}
            <NavAuth />
          </li>
        </ul>
      </nav>
    </header>
  )
}
