import { useGlobalContext } from '@/context/globals'
import { ServiceItems } from '../ServiceItems'

interface FormFinishedProps {
  isYear: boolean
  planOns: {
    online: boolean
    storage: boolean
    custom: boolean
  }
}
export function FormFinished({ isYear, planOns }: FormFinishedProps) {
  const { data, setStep } = useGlobalContext()

  const getPlanName = (userTotalValue: string) => {
    if (isYear) {
      if (userTotalValue === '150') {
        return 'Pro'
      } else if (userTotalValue === '120') {
        return 'Advance'
      } else if (userTotalValue === '90') {
        return 'Arcade'
      }
    } else {
      if (userTotalValue === '15') {
        return 'Pro'
      } else if (userTotalValue === '12') {
        return 'Advance'
      } else if (userTotalValue === '9') {
        return 'Arcade'
      }
    }
  }

  const planUser = isYear ? 'yr' : 'mo'

  function changePlanUser() {
    setStep((prev) => prev - 2)
  }

  return (
    <div className="w-full">
      {data.map((formData, index) => (
        <div key={index} className="">
          {index === data.length - 1 && (
            <>
              <div className="rounded-md bg-[#f0f6ff] p-4">
                <div className="flex items-center justify-between border-b pb-3 font-medium text-[#02295a]">
                  <div className="flex flex-col ">
                    {getPlanName(formData.userPlan)}{' '}
                    {isYear ? '(Yearly)' : '(Monthly)'}
                    <button
                      className="w-max border-b-2 border-[#9699ab] text-left text-[#9699ab]"
                      onClick={changePlanUser}
                    >
                      Change
                    </button>
                  </div>
                  <span>
                    ${formData.userPlan}/{planUser}
                  </span>
                </div>
                <div className="flex flex-col gap-2 pt-3 text-[#9699ab]">
                  <ServiceItems
                    isYear={isYear}
                    planUser={planUser}
                    planOns={planOns}
                  />
                </div>
              </div>
              <div className="flex justify-between p-4">
                <p className="text-[#9699ab]">
                  Total (per {isYear ? 'year' : 'month'})
                </p>
                <span className="font-medium text-[#473dff]">
                  +${formData.userTotal}/{planUser}
                </span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
