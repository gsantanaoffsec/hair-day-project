import { cva } from 'class-variance-authority'

export const buttonIconVariants = cva(
  `
    flex w-8 h-8 shrink-0 items-center
    cursor-pointer transition justify-center
    `,
  {
    variants: {
      variant: {
        primary: 'fill-yellow hover:fill-yellow-dark',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)
