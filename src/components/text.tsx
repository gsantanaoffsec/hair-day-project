import React from 'react'

interface TextProps {
  // Mapeamento de cada tag HTML pro seu tipo react, ou seja, qualquer chave desse objeto IntrinsicElements, pode ser várias tags HTML
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  // Ou é string, number, big inte, jsx element constructor
  // ou seja, resumo de vários possíveis tipos para um elemento
  children?: React.ReactNode
}

export default function Text({
  as = 'span',
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children,
  )
}
