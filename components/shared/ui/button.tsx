import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { ButtonOrLink, type ButtonOrLinkProps } from './button-or-link'

const buttonStyles = cva(
  'relative flex items-center justify-center rounded-md font-medium outline-none transition focus:ring-2 focus:ring-fg-muted focus:ring-offset-2 focus:ring-offset-canvas disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-canvas-primary hover:opacity-90',
        outline:
          'ring-2 ring-inset ring-canvas-primary hover:bg-canvas-primary',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        default: 'px-6 py-3 text-base',
        sm: 'px-4 py-2 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      className={clsx(buttonStyles({ variant, size, className }))}
      {...props}
    />
  )
}
