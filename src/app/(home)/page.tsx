'use client'

import { useGlobalContext } from '@/context/globals'
import { dataTitle } from '@/data/data'
import cn from '@/utils/cn'
import {
  ButtonHTMLAttributes,
  Dispatch,
  FormEvent,
  InputHTMLAttributes,
} from 'react'

export default function Home() {
  const { step, setStep, data, setData } = useGlobalContext()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="grid grid-cols-1 rounded-lg lg:grid-cols-3 lg:bg-white lg:p-4">
      <Steps step={step} />
      <div className="absolute top-36 mx-4 grid gap-4 rounded-lg bg-white p-6 lg:static lg:col-span-2">
        <FormDisplayTitles step={step} />
        <form
          onSubmit={handleSubmit}
          id="formPlan"
          className="flex flex-col gap-4"
        >
          <FormStep1 />
        </form>
        {step < 5 && <ButtonDisplay step={step} setStep={setStep} />}
      </div>
    </div>
  )
}
function FormStep1() {
  return (
    <>
      <InputText
        text={'Name'}
        inputId={'userName'}
        placeholder="e.g. Stephen King"
      />
      <InputText
        text={'Email Address'}
        inputId={'userEmail'}
        placeholder="e.g. stephenking@lorem.com"
      />
      <InputText
        text={'Phone Number'}
        inputId={'userPhone'}
        placeholder="e.g. +1 234 567 890"
      />
    </>
  )
}

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  inputId: string
}
function InputText({ text, inputId, ...props }: InputTextProps) {
  return (
    <label htmlFor={inputId} className="relative flex flex-col gap-1">
      <p className="flex items-center justify-between font-medium text-[#02295a]">
        {text}
      </p>
      <input
        type="text"
        name={inputId}
        id={inputId}
        className=" peer-invalid:peer-focus:required peer form-input rounded-md text-[#02295a]"
        required
        {...props}
      />
      <span className="invisible absolute right-0 text-sm text-[#ed3548] peer-focus:peer-invalid:visible">
        This field is required
      </span>
    </label>
  )
}

interface ButtonDisplayProps {
  step: number
  setStep: Dispatch<React.SetStateAction<number>>
}
function ButtonDisplay({ step, setStep }: ButtonDisplayProps) {
  function handleNext() {
    if (step >= 5) return
    setStep((prev) => prev + 0)
  }
  function handlePrevius() {
    if (step <= 1) return
    setStep((prev) => prev - 1)
  }
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-white p-4">
      <Button
        text={'Go Back'}
        className={step === 1 ? 'opacity-0' : ''}
        onClick={handlePrevius}
        tertiary
      />
      {step <= 3 ? (
        <Button
          text={'Next Step'}
          onClick={handleNext}
          primary
          type="submit"
          form="formPlan"
        />
      ) : (
        <Button text={'Confirm'} onClick={handleNext} secondary />
      )}
    </div>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
}
function Button({
  text,
  primary = false,
  secondary = false,
  tertiary = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `w-28 rounded-sm px-4 py-2 
      ${primary && 'bg-[#02295a] text-white'} 
      ${secondary && 'bg-[#473dff] text-white'} 
      ${tertiary && 'text-[#9699ab]'}`,
        className,
      )}
    >
      {text}
    </button>
  )
}

interface FormDisplayTitlesProps {
  step: number
}
function FormDisplayTitles({ step }: FormDisplayTitlesProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-[#02295a]">
        {dataTitle.title[step - 1]}
      </h1>
      <p className="text-lg text-[#9699ab]">
        {dataTitle.description[step - 1]}
      </p>
    </div>
  )
}

interface StepsProps {
  step: number
}
function Steps({ step }: StepsProps) {
  return (
    <div className="flex h-40 w-full justify-center gap-6 bg-sidebarMobile bg-cover bg-no-repeat p-6 lg:h-full lg:w-min lg:flex-col lg:items-start lg:justify-start lg:bg-sidebarDesktop lg:bg-cover">
      {[1, 2, 3, 4].map((num, i) => {
        return <StepList key={i} num={num} step={step} />
      })}
    </div>
  )
}

interface StepListProps {
  num: number
  step: number
}
function StepList({ num, step }: StepListProps) {
  const isActive = step === num || (step === 5 && num === 4)
  return (
    <span
      className={`flex size-10 items-center justify-center rounded-full border font-bold text-white ${isActive ? 'border-[#adbeff] bg-[#adbeff] text-black' : ''}`}
    >
      {num}
    </span>
  )
}
