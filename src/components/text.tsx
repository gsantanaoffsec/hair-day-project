import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { textVariants } from './text.variants'

/**
 * Componente de texto "polimórfico".
 *
 * Renderiza dinamicamente a tag HTML indicada em `as` (ex: "span", "p", "h1"),
 * evitando criar um componente separado para cada tipo de texto.
 *
 * Exemplo: <Text as="h1" className="titulo">Olá</Text>
 * gera:    <h1 class="titulo">Olá</h1>
 **/

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export default function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    // Qual elemento será criado ?
    as,
    // Conjunto de propriedades
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    // Conteúdo que ficará dentro da tag
    children,
  )
}
