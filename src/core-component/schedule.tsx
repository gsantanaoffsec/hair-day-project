import { cx } from 'class-variance-authority'
import React from 'react'
import { scheduleVariants } from './schedule.variants'

interface ScheduleProps extends React.ComponentProps<'aside'> {}

export default function Schedule({
  children,
  className,
  ...props
}: ScheduleProps) {
  return (
    <aside className={cx(scheduleVariants(), className)} {...props}>
      {children}
    </aside>
  )
}
