import Link from 'next/link'
import { redirect } from 'next/navigation'
import UserMenu from '~/components/user-menu'
import { authOptions } from '~/lib/auth'
import { getCurrentUser } from '~/lib/session'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return redirect(authOptions.pages?.signIn || '/login')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-b-gray-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium">InterPath</span>
          </Link>
          <UserMenu />
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl p-6">{children}</main>
    </div>
  )
}
