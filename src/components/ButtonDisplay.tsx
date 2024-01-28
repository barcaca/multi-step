'use client'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '@/context/globals'

export function ButtonDisplay() {
  const { step, setStep } = useGlobalContext()

  function handlePrevious() {
    if (step <= 1) return
    setStep((prev) => prev - 1)
  }
  return (
    <div className="flex justify-between">
      <Button
        variant={'outline'}
        type="button"
        onClick={handlePrevious}
        className={step === 1 ? 'invisible' : ''}
      >
        Go Back
      </Button>
      <Button type="submit" className={step === 4 ? 'hidden' : ''}>
        Next Step
      </Button>
      <Button variant={'secondary'} className={step === 4 ? '' : 'hidden'}>
        Confirm
      </Button>
    </div>
  )
}
