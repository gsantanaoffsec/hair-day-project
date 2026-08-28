import type React from 'react'
import type { VariantProps } from 'class-variance-authority'

import { buttonIconVariants } from './button-icon.variants'
import Icon from './icon'

interface ButtonIconProps
  extends
    React.ComponentProps<'button'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg']
}

export default function ButtonIcon({
  variant,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, className })}
      {...props}
    >
      <Icon
        svg={icon}
        className="fill-yellow group-hover:fill-yellow-dark"
      />
    </button>
  )
}