'use client'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormStepProps } from '../../app/(home)/page'

export function FormStep1({ form }: FormStepProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="userName"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Name
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="e.g Stephen King"
                  {...field}
                  {...form.register('userName')}
                />
              </FormControl>
            </FormItem>
          )
        }}
      />
      <FormField
        control={form.control}
        name="userEmail"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Email Address
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="e.g stephenking@lorem.com"
                  {...field}
                  {...form.register('userEmail')}
                />
              </FormControl>
            </FormItem>
          )
        }}
      />
      <FormField
        control={form.control}
        name="userPhone"
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="flex items-center justify-between">
                Phone Number
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="e.g +1 234 567 890"
                  {...field}
                  {...form.register('userPhone')}
                />
              </FormControl>
            </FormItem>
          )
        }}
      />
    </>
  )
}
