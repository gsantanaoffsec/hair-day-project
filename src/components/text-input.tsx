import { type VariantProps, cx } from 'class-variance-authority'
import type React from 'react'
import UserIcon from '../assets/icons/user-square.svg?react'
import Icon from './icon'
import { textInputTextVariants, textInputVariants } from './text-input.variants'

interface TextInputProps
  extends
    VariantProps<typeof textInputVariants>,
    VariantProps<typeof textInputTextVariants>,
    React.ComponentProps<'input'> {}

export default function InputText({
  filled,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className={cx(textInputVariants({ active: filled }), className)}>
      <Icon svg={UserIcon} className="fill-yellow-dark" />
      <input
        placeholder="Nome do cliente"
        className={cx('flex-1 outline-none', textInputTextVariants({ filled }))}
        {...props}
      />
    </div>
  )
}
