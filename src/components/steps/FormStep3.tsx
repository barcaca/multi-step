'use client'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { dataAddOns } from '@/data/data'
import { FormStepProps } from '../../app/(home)/page'

interface FormYearStepProps {
  isYear: boolean
}
interface CombineProps extends FormYearStepProps, FormStepProps {}
export function FormStep3({ form, isYear }: CombineProps) {
  return (
    <>
      {dataAddOns.map((add, i) => {
        return (
          <FormField
            key={i}
            control={form.control}
            name={
              add.name as 'onlineService' | 'largerStorage' | 'customProfile'
            }
            render={({ field }) => (
              <FormItem className="relative block w-full">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="peer absolute bottom-1/3 left-4 size-6 rounded-md"
                  />
                </FormControl>
                <FormLabel className="border-border flex cursor-pointer items-center justify-between  gap-2 rounded-md border p-4 font-normal shadow-sm hover:border-[#473dff] peer-aria-checked:border-[#473dff] peer-aria-checked:ring-1">
                  <span className="invisible size-6" />

                  <div className="flex flex-1 flex-col lg:text-lg">
                    {add.text}
                    <span className="text-xs text-[#9699ab] lg:text-sm">
                      {add.description}
                    </span>
                  </div>
                  <div className="text-sm ">
                    +${isYear ? add.yearValue : add.monthValue}/
                    {isYear ? 'yr' : 'mo'}
                  </div>
                </FormLabel>
              </FormItem>
            )}
          />
        )
      })}
    </>
  )
}
