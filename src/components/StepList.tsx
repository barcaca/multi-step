'use client'
interface StepListProps {
  num: number
  info: string
  step: number
}
export function StepList({ num, info, step }: StepListProps) {
  const isActive = step === num || (step === 5 && num === 4)
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`flex size-10 items-center justify-center rounded-full border font-bold text-white ${isActive ? 'border-[#adbeff] bg-[#adbeff] text-black' : ''}`}
      >
        {num}
      </span>
      <div className=" hidden flex-col justify-center uppercase lg:flex">
        <h3 className="text-sm text-[#9699ab]"> Step {num}</h3>
        <span className="text-lg font-bold text-white">{info} </span>
      </div>
    </div>
  )
}
