import { cva } from 'class-variance-authority'

export const timeSelectVariants = cva(
  `
    flex w-[78.5px] h-10 items-center justify-center
    py-2 pr-[19.5px] pl-4.75 rounded-lg pointer-events-auto
    `,
  {
    variants: {
      selected: {
        true: 'bg-gray-600 border border-yellow text-yellow',
        false:
          'bg-gray-600 hover:bg-gray-500 border border-gray-500 text-gray-200',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none text-gray-400',
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  },
)

export const timeSelectTextVariants = cva(``, {
  variants: {
    selected: {
      true: 'text-yellow',
      false: 'text-gray-200',
    },
    disabled: {
      true: 'text-gray-400',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
})
