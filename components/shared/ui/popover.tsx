'use client'

import type { Dispatch, SetStateAction, ReactNode } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export default function Popover({
  children,
  content,
  align = 'center',
  openPopover,
  setOpenPopover,
}: {
  children: ReactNode
  content: ReactNode | string
  align?: 'center' | 'start' | 'end'
  openPopover: boolean
  setOpenPopover: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <>
      <PopoverPrimitive.Root
        open={openPopover}
        onOpenChange={isOpen => setOpenPopover(isOpen)}
      >
        <PopoverPrimitive.Trigger className="inline-flex" asChild>
          {children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          sideOffset={4}
          align={align}
          className="z-20 items-center rounded-md border-2 border-canvas-primary/50 drop-shadow-lg"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </>
  )
}
