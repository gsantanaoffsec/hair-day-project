import { cx } from 'class-variance-authority'
import type React from 'react'
import AppointmentRow from '../components/appointment-row'
import Icon from '../components/icon'
import Text from '../components/text'
import { periodCardVariants } from './period-card.variants'

export interface Appointment {
  id: string
  hour: string
  clientName: string
  date: string
}

interface PeriodCardProps extends React.ComponentProps<'div'> {
  icon: React.ComponentProps<typeof Icon>['svg']
  period: string
  hours: string
  appointments: Appointment[]
  onDelete: (id: string) => void
}

export default function PeriodCard({
  icon,
  period,
  hours,
  appointments,
  onDelete,
  className,
  ...props
}: PeriodCardProps) {
  return (
    <div className={cx(periodCardVariants(), className)} {...props}>
      <div className="flex items-center justify-between self-stretch border-b border-gray-600 pb-3">
        <div className="flex items-center gap-2">
          <Icon svg={icon} className="w-5 h-5" />
          <Text variant="text-sm" className="text-gray-300!">
            {period}
          </Text>
        </div>
        <Text variant="text-sm" className="text-gray-400">
          {hours}
        </Text>
      </div>
      <div className="flex flex-col gap-0.5">
        {appointments.length === 0 ? (
          <Text variant="text-sm" className="text-gray-400!">
            Você ainda não tem agendamentos cadastrados nesse período.
          </Text>
        ) : (
          appointments.map((appointment) => (
            <AppointmentRow
              key={appointment.id}
              hour={appointment.hour}
              clientName={appointment.clientName}
              onDelete={() => onDelete(appointment.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}
