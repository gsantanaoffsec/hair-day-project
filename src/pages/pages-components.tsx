import Button from '../components/button'
import ButtonIcon from '../components/button-icon'
import Icon from '../components/icon'
import Text from '../components/text'
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
        <Icon svg={CalendarIcon} />
        <Icon svg={CaretDownIcon} />
        <Icon svg={CaretLeftIcon} />
        <Icon svg={CaretRightIcon} />
        <Icon svg={CloudSunIcon} />
        <Icon svg={MoonStarsIcon} />
        <Icon svg={SunHorizonIcon} />
        <Icon svg={TrashIcon} />
        <Icon svg={UserSquareIcon} />
      </div>

      <div>
        <Button>AGENDAR</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
      </div>



    </main>
  )
}
