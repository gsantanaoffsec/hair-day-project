import React from 'react'
import Button from '../components/button'
import DateInput from '../components/date-input'
import Text from '../components/text'
import InputText from '../components/text-input'
import TimeSelect from '../components/time-select'
import Main from '../core-component/main'
import PeriodCard, { type Appointment } from '../core-component/period-card'
import Schedule from '../core-component/schedule'
import CloudSunIcon from './../assets/icons/cloud-sun.svg?react'
import MoonStarsIcon from './../assets/icons/moon-stars.svg?react'
import SunHorizonIcon from './../assets/icons/sun-horizon.svg?react'

// Estão fora, pois nunca mudam — dentro do componente, seriam recriados a cada renderização sem motivo

const morningHours = ['09:00', '10:00', '11:00', '12:00']
const afternoonHours = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
const nightHours = ['19:00', '20:00', '21:00']

export default function PageHome() {
  // // Horário escolhido no formulário; '' quando nenhum foi selecionado
  const [selectedTime, setSelectedTime] = React.useState('')

  // Nome digitado no campo de cliente
  const [clientNameForm, setClientNameForm] = React.useState('')

  // Todos os agendamentos criados, exibidos nos cards de período
  const [appointments, setAppointments] = React.useState<Appointment[]>([])

  function handleCreateAppointment(event: React.SubmitEvent<HTMLFormElement>) {
    // Impede o navegador de recarregar a página, comportamento padrão ao enviar um <form>
    event.preventDefault()

    const newAppointment = {
      id: crypto.randomUUID(),
      hour: selectedTime,
      clientName: clientNameForm,
    }

    // Pega tudo que já estava na lista e acrescente esse item no final
    setAppointments([...appointments, newAppointment])

    setClientNameForm('')

    setSelectedTime('')
  }

  function handleDeleteAppointment(id: string) {
    setAppointments(appointments.filter((item) => item.id !== id))
  }

  return (
    <div className="flex w-screen h-screen p-5">
      <Schedule>
        <div className="flex flex-col gap-2 self-stretch">
          <Text variant="title-lg">Agende um atendimento</Text>
          <Text variant="text-sm" className="text-gray-300">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Text>
        </div>
        <form
          onSubmit={handleCreateAppointment}
          className="flex flex-col gap-8 self-stretch"
        >
          <div className="flex flex-col gap-2 self-stretch">
            <Text variant="title-md" className="text-gray-200!">
              Data
            </Text>
            <DateInput />
          </div>

          <div className="flex flex-col gap-2">
            <Text variant="title-md" className="text-gray-200!">
              Horários
            </Text>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300!">
                  Manhã
                </Text>
                <div className="flex flex-row flex-wrap gap-2">
                  {morningHours.map((hour) => (
                    <TimeSelect
                      disabled={appointments.some((item) => item.hour === hour)}
                      selected={hour === selectedTime}
                      onClick={() => setSelectedTime(hour)}
                      key={hour}
                    >
                      {hour}
                    </TimeSelect>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300!">
                  Tarde
                </Text>
                <div className="flex flex-row flex-wrap gap-2">
                  {afternoonHours.map((hour) => (
                    <TimeSelect
                      disabled={appointments.some((item) => item.hour === hour)}
                      selected={hour === selectedTime}
                      onClick={() => setSelectedTime(hour)}
                      key={hour}
                    >
                      {hour}
                    </TimeSelect>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300!">
                  Noite
                </Text>
                <div className="flex flex-row flex-wrap gap-2">
                  {nightHours.map((hour) => (
                    <TimeSelect
                      disabled={appointments.some((item) => item.hour === hour)}
                      selected={hour === selectedTime}
                      onClick={() => setSelectedTime(hour)}
                      key={hour}
                    >
                      {hour}
                    </TimeSelect>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="title-md" className="text-gray-200!">
              Cliente
            </Text>
            <InputText
              value={clientNameForm}
              filled={clientNameForm.length > 0}
              onChange={(event) => setClientNameForm(event.target.value)}
            />
          </div>
          <Button>AGENDAR</Button>
        </form>
      </Schedule>
      <Main>
        <div className="flex flex-row items-start justify-between w-full self-stretch">
          <div className="flex flex-col gap-1">
            <Text variant="title-lg">Sua agenda</Text>
            <Text variant="text-sm" className="text-gray-300">
              Consulte os seus cortes de cabelo agendados por dia
            </Text>
          </div>
          <DateInput />
        </div>
        <PeriodCard
          icon={SunHorizonIcon}
          period="Manhã"
          hours="09-12h"
          onDelete={handleDeleteAppointment}
          appointments={appointments.filter((item) =>
            morningHours.includes(item.hour),
          )}
        />
        <PeriodCard
          icon={CloudSunIcon}
          period="Tarde"
          hours="13-18h"
          onDelete={handleDeleteAppointment}
          appointments={appointments.filter((item) =>
            afternoonHours.includes(item.hour),
          )}
        />
        <PeriodCard
          icon={MoonStarsIcon}
          period="Noite"
          hours="19-21h"
          onDelete={handleDeleteAppointment}
          appointments={appointments.filter((item) =>
            nightHours.includes(item.hour),
          )}
        />
      </Main>
    </div>
  )
}
