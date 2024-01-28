'use client'

import { Form } from '@/components/ui/form'
import { useGlobalContext } from '@/context/globals'
import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormReturn, useForm } from 'react-hook-form'

import { FormFinished } from '@/components/steps/FormFinished'
import { useState } from 'react'
import * as z from 'zod'
import { ButtonDisplay } from '../../components/ButtonDisplay'
import { FormDisplayTitles } from '../../components/FormDisplayTitles'
import { Steps } from '../../components/Steps'
import { FormStep1 } from '../../components/steps/FormStep1'
import { FormStep2 } from '../../components/steps/FormStep2'
import { FormStep3 } from '../../components/steps/FormStep3'

const formSchema = z.object({
  userName: z.string().min(1, { message: 'This field is required' }),
  userEmail: z.string().email({ message: 'This field is required' }),
  userPhone: z.string().min(8, { message: 'This field is required' }),
  userPlan: z.string(),
  onlineService: z.boolean().default(false).optional(),
  largerStorage: z.boolean().default(false).optional(),
  customProfile: z.boolean().default(false).optional(),
  userTotal: z.number(),
})

export type FormSchema = z.infer<typeof formSchema>

export interface FormStepProps {
  form: UseFormReturn<FormSchema>
}
export default function Home() {
  const [isYear, setIsYear] = useState(false)
  const { step, setStep, setData } = useGlobalContext()
  const [planOns, setPlanOns] = useState({
    online: false,
    storage: false,
    custom: false,
  })
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userEmail: '',
      userPhone: '',
      userPlan: '',
      onlineService: false,
      largerStorage: false,
      customProfile: false,
      userTotal: 0,
    },
  })
  function handleNext() {
    if (step >= 5) return
    setStep((prev) => prev + 1)
  }

  function handleSubmit(formData: FormSchema) {
    handleNext()

    const userPlanAsNumber = parseFloat(formData.userPlan)
    let userPlanAdds = 0

    if (formData.onlineService) {
      userPlanAdds += isYear ? 10 : 1
    }
    if (formData.largerStorage) {
      userPlanAdds += isYear ? 20 : 2
    }
    if (formData.customProfile) {
      userPlanAdds += isYear ? 20 : 2
    }

    const userTotalPlan = userPlanAdds + userPlanAsNumber

    const newPlanOns = {
      online: formData.onlineService || false,
      storage: formData.largerStorage || false,
      custom: formData.customProfile || false,
    }

    if (step === 3) {
      setData((prevData) => [
        ...prevData,
        {
          userName: formData.userName,
          userEmail: formData.userEmail,
          userPhone: formData.userPhone,
          userPlan: formData.userPlan,
          userPlusAdd: userPlanAdds,
          userTotal: userTotalPlan,
        },
      ])
      setPlanOns(newPlanOns)
    }
  }

  return (
    <div className="grid grid-cols-1 rounded-lg lg:h-2/3 lg:grid-cols-3 lg:bg-white lg:p-4">
      <Steps step={step} />
      <div className="mx-6 -mt-7 min-h-[430px] max-w-[550px] rounded-md bg-white p-6 sm:mx-auto lg:static lg:col-span-2 lg:-mt-0 lg:min-w-[550px]">
        <FormDisplayTitles step={step} />
        {step === 4 && <FormFinished isYear={isYear} planOns={planOns} />}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full flex-col gap-4"
          >
            {step === 1 && <FormStep1 form={form} />}
            {step === 2 && (
              <FormStep2 form={form} isYear={isYear} setIsYear={setIsYear} />
            )}
            {step === 3 && <FormStep3 form={form} isYear={isYear} />}

            {step <= 4 && <ButtonDisplay />}
          </form>
        </Form>
      </div>
    </div>
  )
}
