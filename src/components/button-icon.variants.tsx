import { cva } from 'class-variance-authority'

// group: “os elementos filhos dentro deste botão podem reagir ao meu hover, focus, active etc.”

export const buttonIconVariants = cva(
  `
    group
    flex w-8 h-8 shrink-0 items-center
    cursor-pointer transition justify-center
    `,
  {
    variants: {
      variant: {
        primary: 'text-yellow hover:text-yellow-dark',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)
