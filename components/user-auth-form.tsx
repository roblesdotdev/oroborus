'use client'
import { signIn } from 'next-auth/react'
import { GithubIcon } from './shared/icons'
import { useState } from 'react'
import Button from './shared/ui/button'

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
      <Button
        variant="outline"
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true)
          signIn('github')
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <GithubIcon className="h-4 w-4" />
          <span>{isLoading ? 'Loading...' : 'Github'}</span>
        </div>
      </Button>
    </div>
  )
}
