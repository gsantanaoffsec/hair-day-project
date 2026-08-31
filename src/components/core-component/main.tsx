import { cx } from 'class-variance-authority'
import type React from 'react'
import { mainVariants } from './main.variants'

interface MainProps extends React.ComponentProps<'main'> {}

export default function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cx(mainVariants(), className)} {...props}>
      {children}
    </main>
  )
}
