import { cx } from 'class-variance-authority'
import type React from 'react'
import { iconVariants } from './icon.variants'

interface IconProps extends React.ComponentProps<'svg'> {
  svg: React.FC<React.ComponentProps<'svg'>>
}

export default function Icon({
  svg: SvgComponent,
  className,
  ...props
}: IconProps) {
  return <SvgComponent className={cx(iconVariants(), className)} {...props} />
}
