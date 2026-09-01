import { cx, type VariantProps } from 'class-variance-authority'
import React from 'react'
import Text from './text'
import {
  timeSelectTextVariants,
  timeSelectVariants,
} from './time-select.variants'

interface TimeSelectProps
  extends
    Omit<React.ComponentProps<'button'>, 'disabled'>,
    VariantProps<typeof timeSelectVariants> {}

export default function TimeSelect({
  children,
  selected,
  disabled,
  onClick,
  className,
  ...props
}: TimeSelectProps) {
  return (
    <button
      type="button"
      className={cx(timeSelectVariants({ selected, disabled }), className)}
      onClick={() => onClick?.(children)}
      {...props}
    >
      <Text className={timeSelectTextVariants({ selected, disabled })}>
        {children}
      </Text>
    </button>
  )
}
