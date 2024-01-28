'use client'
import { StepList } from '@/components/StepList'

interface StepsProps {
  step: number
}
export function Steps({ step }: StepsProps) {
  const stepsInfo = [
    { num: 1, info: 'Your Info' },
    { num: 2, info: 'Select Plan' },
    { num: 3, info: 'Add-ons' },
    { num: 4, info: 'Summary' },
  ]

  return (
    <div className="flex h-32 w-full justify-center gap-6 bg-sidebarMobile bg-cover bg-no-repeat p-6 lg:h-full lg:min-w-72 lg:flex-col lg:items-start lg:justify-start lg:rounded-md lg:bg-sidebarDesktop lg:pt-12">
      {stepsInfo.map((item, i) => {
        return <StepList key={i} num={item.num} info={item.info} step={step} />
      })}
    </div>
  )
}
