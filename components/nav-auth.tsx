import { getCurrentUser } from '~/lib/session'
import Button from './shared/ui/button'

export default async function NavAuth() {
  const user = await getCurrentUser()

  return (
    <>
      {!user ? (
        <Button href="/login" size="sm">
          Log In
        </Button>
      ) : (
        <Button href="/dashboard" size="sm" variant="outline">
          My account
        </Button>
      )}
    </>
  )
}
