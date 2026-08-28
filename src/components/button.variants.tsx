import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  `
    flex w-85 h-14 px-4 items-center justify-center gap-2
    rounded-lg border-2 border-transparent 
    cursor-pointer transition group
  `,
  {
    variants: {
      variant: {
        primary: 'bg-yellow hover:border-yellow-light',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },

    defaultVariants: {
      variant: 'primary',
      disabled: false,
    },
  },
)

export const buttonTextVariants = cva(``, {
  variants: {
    variant: {
      primary: 'text-gray-900',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
