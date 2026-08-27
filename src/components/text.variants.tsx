import { cva } from 'class-variance-authority'

export const textVariants = cva(
  `
    font-sans text-gray-400
    `,
  {
    variants: {
        variant: {
            '',
        },
    },
  },
)
