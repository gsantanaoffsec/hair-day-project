import React from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonTextVariants, buttonVariants } from './button.variants'
import type Icon from './icon'
import Text from './text'

// Pegue tudo de 'button' mas ignore 'size' e 'disabled'

interface ButtonProps
  extends
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  // Pega todas as props que o componente Icon aceita
  // Pega exatamente o mesmo tipo da prop 'svg' do componente Icon
  icon?: React.ComponentProps<typeof Icon>['svg']
  handling?: boolean
}

export default function Button({
  variant,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, disabled, className })}
      {...props}
    >
      <Text variant='title-sm' className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
