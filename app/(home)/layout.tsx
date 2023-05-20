import Footer from '~/components/layout/footer'
import Navbar from '~/components/layout/navbar'

export const metadata = {
  title: 'Home',
}

type HomeLayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col text-gray-100">
      <Navbar />
      <main className="flex-1 text-gray-200">{children}</main>
      <Footer />
    </div>
  )
}
