import { cva } from 'class-variance-authority'

export const textInputVariants = cva(
  `
    flex w-85 h-12 p-3 items-center gap-2 rounded-lg`,
  {
    variants: {
      active: {
        true: 'border border-yellow-dark',
        false: 'border border-gray-500',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const textInputTextVariants = cva(``, {
  variants: {
    filled: {
      true: 'text-gray-200',
      false: 'text-gray-200 placeholder:text-gray-400',
    },
  },
  defaultVariants: {
    filled: false,
  },
})
