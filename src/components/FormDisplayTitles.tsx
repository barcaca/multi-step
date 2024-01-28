'use client'
import { dataTitle } from '@/data/data'
import { ThankYouIcon } from './icon/icon'

interface FormDisplayTitlesProps {
  step: number
}
export function FormDisplayTitles({ step }: FormDisplayTitlesProps) {
  return (
    <div
      className={`flex max-w-md flex-col gap-3 ${step === 5 ? 'h-full items-center justify-center text-center lg:px-4' : ''}`}
    >
      {step === 5 && <ThankYouIcon className="size-16" />}
      <h1 className="text-3xl font-medium text-[#02295a]">
        {dataTitle.title[step - 1]}
      </h1>
      <p className="text-lg text-[#9699ab]">
        {dataTitle.description[step - 1]}
      </p>
    </div>
  )
}
