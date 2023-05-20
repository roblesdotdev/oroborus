import { Balancer } from 'react-wrap-balancer'
import { ChevronLeftIcon } from '~/components/shared/icons'
import Button from '~/components/shared/ui/button'
import UserAuthForm from '~/components/user-auth-form'

export default function LoginPage() {
  return (
    <>
      <div className="flex items-center p-6">
        <Button href="/" size="sm">
          <div className="flex items-center gap-2">
            <ChevronLeftIcon className="h-3 w-3" />
            <span>Back</span>
          </div>
        </Button>
      </div>

      <div className="mt-24 flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-bold md:text-4xl">Welcome back</h1>
        <p className="mt-2 max-w-xl text-center text-fg-muted md:text-lg">
          <Balancer>
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </Balancer>
        </p>
        <UserAuthForm />
        <div className="pt-4">
          <p className="px-8 text-center text-sm text-gray-400">
            <Button href="/register" variant="link" size="sm0">
              Don&apos;t have an account? Sign Up
            </Button>
          </p>
        </div>
      </div>
    </>
  )
}
