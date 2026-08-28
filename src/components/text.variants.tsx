import { cva } from 'class-variance-authority'

export const textVariants = cva(
  `
    font-sans text-gray-200
    `,
  {
    variants: {
      variant: {
        'title-lg': 'text-title-lg font-bold',
        'title-md': 'text-title-md font-bold',
        'title-sm': 'text-title-sm font-bold',
        'text-md': 'text-md',
        'text-sm': 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'text-md',
    },
  },
)
