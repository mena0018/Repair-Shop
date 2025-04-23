"use client"

import { useFormContext } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type Props<TSchema> = {
  title: string
  name: keyof TSchema & string
  disabled?: boolean
}

export function SwitchWithLabel<TSchema>({ name, title, disabled }: Props<TSchema>) {
  const form = useFormContext()

  return (
    <FormField
      name={name}
      disabled={disabled}
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex w-full items-center gap-2">
          <FormLabel htmlFor={name} className={cn("mt-2", { "opacity-50": disabled })}>
            {title}
          </FormLabel>

          <FormControl>
            <Switch id={name} {...field} onCheckedChange={field.onChange} checked={field.value} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
