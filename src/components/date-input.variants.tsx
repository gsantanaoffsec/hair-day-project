import { cva } from 'class-variance-authority'

export const dateInputVariants = cva(
  `
    flex h-12 p-3 items-center gap-2 self-stretch
    rounded-lg border border-gray-500 cursor-pointer
    `,
)
