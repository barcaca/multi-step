'use client'
import { RadioGroupForm } from '@/components/RadioGroupForm'
import { Toggle } from '@/components/Toggle'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup } from '@/components/ui/radio-group'
import { Dispatch } from 'react'
import { FormStepProps } from '../../app/(home)/page'

interface FormYearStepProps {
  isYear: boolean
  setIsYear: Dispatch<React.SetStateAction<boolean>>
}
interface CombineProps extends FormYearStepProps, FormStepProps {}
export function FormStep2({ form, isYear, setIsYear }: CombineProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="userPlan"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                className="relative flex flex-col lg:flex-row"
              >
                <RadioGroupForm isYear={isYear} />
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Toggle isYear={isYear} setIsYear={setIsYear} />
    </>
  )
}
