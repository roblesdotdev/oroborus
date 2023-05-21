'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Popover from '~/components/shared/ui/popover'
import Image from 'next/image'
import type { User } from 'next-auth'
import { PowerIcon } from './shared/icons'

export default function UserMenu({ user }: { user: User }) {
  const { name, email, image } = user
  const [openPopover, setOpenPopover] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          <div className="w-56 rounded-md bg-[#121212] p-2">
            <button
              className="relative flex w-full flex-col justify-start rounded-md p-2 text-left text-sm transition-all duration-75"
              disabled
            >
              <p className="text-base text-fg/80">{name}</p>
              <p className="text-sm text-fg-muted">{email}</p>
            </button>
            <div className="mt-2 border-t border-canvas-primary py-2">
              <button
                className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-canvas-primary"
                onClick={() => signOut()}
              >
                <PowerIcon className="h-4 w-4" />
                <p className="text-sm">Logout</p>
              </button>
            </div>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={name || 'user avatar'}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            quality={75}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </div>
  )
}
