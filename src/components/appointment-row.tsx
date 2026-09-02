import { cx } from 'class-variance-authority'
import type React from 'react'
import TrashIcon from '../assets/icons/trash.svg?react'
import { appointmentRowVariants } from './appointment-row.variants'
import Icon from './icon'
import Text from './text'

interface AppointmentRowProps extends React.ComponentProps<'div'> {
  hour: string
  clientName: string
  onDelete?: () => void
}

export default function AppointmentRow({
  hour,
  clientName,
  onDelete,
  className,
  ...props
}: AppointmentRowProps) {
  return (
    <div className={cx(appointmentRowVariants(), className)} {...props}>
      <div className="flex items-center gap-5">
        <Text variant="title-md" className="text-gray-200!">
          {hour}
        </Text>
        <Text variant="text-md" className="text-gray-200!">
          {clientName}
        </Text>
      </div>
      <button type="button" onClick={onDelete} className="group cursor-pointer">
        <Icon
          svg={TrashIcon}
          className="w-4 h-4 fill-yellow! group-hover:fill-yellow-dark!"
        />
      </button>
    </div>
  )
}
