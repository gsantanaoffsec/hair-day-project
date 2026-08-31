import { cx } from 'class-variance-authority'
import React from 'react'
import CalendarIcon from '../assets/icons/calendar.svg?react'
import { dateInputVariants } from './date-input.variants'
import Icon from './icon'

interface DateInputProps extends React.ComponentProps<'input'> {}

export default function DateInput({ className, ...props }: DateInputProps) {
  return (
    <div className={cx(dateInputVariants(), className)}>
      <Icon svg={CalendarIcon} className="fill-yellow-dark" />
      <input type="date" className="outline-none text-gray-200" {...props} />
    </div>
  )
}
