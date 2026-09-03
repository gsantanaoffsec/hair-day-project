import { cx } from 'class-variance-authority'
import React from 'react'
import CalendarIcon from '../assets/icons/calendar.svg?react'
import CaretDownIcon from '../assets/icons/caret-down.svg?react'
import { dateInputVariants } from './date-input.variants'
import Icon from './icon'

interface DateInputProps extends React.ComponentProps<'input'> {}

export default function DateInput({ className, ...props }: DateInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Abre o seletor de data nativo ao clicar em qualquer parte do container
  // (o caret é só visual). showPicker() não existe em navegadores antigos e
  // lança fora de um gesto do usuário — nesses casos só focamos o campo,
  // mantendo a edição manual pelo teclado.
  function openNativePicker() {
    try {
      inputRef.current?.showPicker()
    } catch {
      inputRef.current?.focus()
    }
  }

  return (
    <div
      className={cx(dateInputVariants(), className)}
      onClick={openNativePicker}
    >
      <Icon svg={CalendarIcon} className="w-4 h-4 fill-yellow-dark" />
      <input
        ref={inputRef}
        type="date"
        className="flex-1 appearance-none bg-transparent outline-none text-gray-200"
        {...props}
      />
      <Icon svg={CaretDownIcon} className="w-4 h-4 fill-yellow-dark" />
    </div>
  )
}
