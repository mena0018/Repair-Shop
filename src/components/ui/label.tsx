"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "font-medleading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root data-slot="label" className={cn(labelVariants(), className)} {...props} />
)

export { Label }
