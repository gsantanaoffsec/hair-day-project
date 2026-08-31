import Button from '../components/button'
import ButtonIcon from '../components/button-icon'
import DateInput from '../components/date-input'
import Icon from '../components/icon'
import Text from '../components/text'
import InputText from '../components/text-input'
import TimeSelect from '../components/time-select'
import CalendarIcon from './../assets/icons/calendar.svg?react'
import CaretDownIcon from './../assets/icons/caret-down.svg?react'
import CaretLeftIcon from './../assets/icons/caret-left.svg?react'
import CaretRightIcon from './../assets/icons/caret-right.svg?react'
import CloudSunIcon from './../assets/icons/cloud-sun.svg?react'
import MoonStarsIcon from './../assets/icons/moon-stars.svg?react'
import SunHorizonIcon from './../assets/icons/sun-horizon.svg?react'
import TrashIcon from './../assets/icons/trash.svg?react'
import UserSquareIcon from './../assets/icons/user-square.svg?react'

export default function PageComponents() {
  return (
    <main className="min-h-screen p-8">
      <Text as="h1" variant="title-lg">
        Olá Mundo - Aba Components !!!
      </Text>

      <div className="flex gap-1">
        <Icon svg={CalendarIcon} className="fill-yellow-dark" />
        <Icon svg={CaretDownIcon} className="fill-yellow-dark" />
        <Icon svg={CaretLeftIcon} className="fill-yellow-dark" />
        <Icon svg={CaretRightIcon} className="fill-yellow-dark" />
        <Icon svg={CloudSunIcon} className="fill-yellow-dark" />
        <Icon svg={MoonStarsIcon} className="fill-yellow-dark" />
        <Icon svg={SunHorizonIcon} className="fill-yellow-dark" />
        <Icon svg={TrashIcon} className="fill-yellow-dark" />
        <Icon svg={UserSquareIcon} className="fill-yellow-dark" />
      </div>

      <div>
        <Button>AGENDAR</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
      </div>

      <div className="flex gap-2">
        <TimeSelect>09:00</TimeSelect>
        <TimeSelect selected>09:00</TimeSelect>
        <TimeSelect disabled>09:00</TimeSelect>
      </div>

      <div className="flex gap-2">
        <InputText filled />
        <InputText active />
      </div>

      <div className="flex gap-2">
        <DateInput />
      </div>
    </main>
  )
}
