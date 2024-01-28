'use client'
import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { dataPlans } from '@/data/data'

interface RadioGroupFormProps {
  isYear: boolean
}
export function RadioGroupForm({ isYear }: RadioGroupFormProps) {
  return (
    <>
      {dataPlans.map((plan, i) => {
        return (
          <FormItem className="block w-full" key={i}>
            <FormControl>
              <RadioGroupItem
                value={isYear ? plan.yearValue : plan.monthValue}
                className="peer hidden"
              />
            </FormControl>
            <FormLabel className="border-border flex cursor-pointer items-center justify-between gap-5 rounded-md border p-2 font-normal shadow-sm hover:border-[#473dff] peer-aria-checked:border-[#473dff] peer-aria-checked:ring-1 lg:min-h-[200px] lg:flex-col lg:items-start lg:gap-14 lg:p-4">
              {plan.icon}
              <div className="flex flex-1 flex-col lg:text-lg">
                {plan.text}
                <span className="text-xs text-[#9699ab] lg:text-sm">
                  ${isYear ? plan.yearValue : plan.monthValue}/
                  {isYear ? 'yr' : 'mo'}
                </span>
                {isYear && <span className="text-xs">2 months free</span>}
              </div>
            </FormLabel>
          </FormItem>
        )
      })}
    </>
  )
}
