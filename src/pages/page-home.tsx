import Button from '../components/button'
import Main from '../components/core-component/main'
import Schedule from '../components/core-component/schedule'
import DateInput from '../components/date-input'
import Text from '../components/text'
import InputText from '../components/text-input'
import TimeSelect from '../components/time-select'

export default function PageHome() {
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
        <form className="flex flex-col gap-8 self-stretch">
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
                  <TimeSelect>09:00</TimeSelect>
                  <TimeSelect>10:00</TimeSelect>
                  <TimeSelect>11:00</TimeSelect>
                  <TimeSelect>12:00</TimeSelect>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300!">
                  Tarde
                </Text>
                <div className="flex flex-row flex-wrap gap-2">
                  <TimeSelect disabled>13:00</TimeSelect>
                  <TimeSelect disabled>14:00</TimeSelect>
                  <TimeSelect selected>15:00</TimeSelect>
                  <TimeSelect disabled>16:00</TimeSelect>
                  <TimeSelect disabled>17:00</TimeSelect>
                  <TimeSelect selected>18:00</TimeSelect>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300!">
                  Noite
                </Text>
                <div className="flex flex-row flex-wrap gap-2">
                  <TimeSelect>19:00</TimeSelect>
                  <TimeSelect>20:00</TimeSelect>
                  <TimeSelect>21:00</TimeSelect>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="title-md" className="text-gray-200!">
              Cliente
            </Text>
            <InputText />
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
      </Main>
    </div>
  )
}
