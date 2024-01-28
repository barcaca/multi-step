'use client'
import { Switch } from '@/components/ui/switch'
import { Label } from '@radix-ui/react-label'
import { Dispatch, SetStateAction } from 'react'

interface ToggleProps {
  isYear: boolean
  setIsYear: Dispatch<SetStateAction<boolean>>
}
export function Toggle({ isYear, setIsYear }: ToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 rounded-md bg-[#f0f6ff] p-2">
      <Label htmlFor="togglePlan" className={!isYear ? 'text-[#473dff]' : ''}>
        Monthly
      </Label>
      <Switch id="togglePlan" onClick={() => setIsYear(!isYear)} />
      <Label htmlFor="togglePlan" className={isYear ? 'text-[#473dff]' : ''}>
        Yearly
      </Label>
    </div>
  )
}
