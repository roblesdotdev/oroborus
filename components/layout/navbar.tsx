import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 flex h-16 w-full flex-col justify-center bg-black/5 backdrop-blur">
      <nav>
        <ul className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 text-sm">
          <li>
            <Link href="/">
              <div className="flex items-center gap-2">
                <h1 className="text-base font-medium">Abyssal</h1>
              </div>
            </Link>
          </li>
          <li className="ml-auto flex items-center gap-2">
            <button>Login</button>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
