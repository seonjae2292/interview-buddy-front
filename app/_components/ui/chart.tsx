"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, config, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("recharts-wrapper", className)}
        style={
          {
            "--color-primary": "hsl(var(--primary))",
            "--color-secondary": "hsl(var(--secondary))",
            "--color-muted": "hsl(var(--muted))",
            "--color-muted-foreground": "hsl(var(--muted-foreground))",
            "--color-border": "hsl(var(--border))",
            ...Object.fromEntries(Object.entries(config).map(([key, value]) => [`--color-${key}`, value.color])),
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps<TValue extends object, TName extends string> extends React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  cursor?: boolean
  offset?: number
  viewBox?: TooltipProps<TValue, TName>["viewBox"]
  active?: boolean
  payload?: TooltipProps<TValue, TName>["payload"]
  label?: React.ReactNode
  defaultIndex?: number
}

function ChartTooltip<TValue extends object, TName extends string>({
  className,
  content,
  cursor = true,
  offset = 10,
  active,
  payload,
  label,
  defaultIndex,
  ...props
}: ChartTooltipProps<TValue, TName>) {
  if (!active) {
    if (typeof defaultIndex === "number") {
      return null
    }
    return null
  }

  return (
    <div className={cn("rounded-lg border bg-background px-3 py-2 text-sm shadow-sm", className)} {...props}>
      {content ?? (
        <div>
          <div className="grid gap-0.5">
            {payload?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-1 w-4 rounded-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <span className="font-medium text-muted-foreground">{item.name}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          {label && <div className="mt-2 border-t pt-2 text-muted-foreground">{label}</div>}
        </div>
      )}
    </div>
  )
}

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  formatter?: (value: number, name: string, item: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  hideLabel?: boolean
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, formatter, labelFormatter, hideLabel = false, ...props }, ref) => {
    const { active, payload, label } = props as any

    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn("rounded-lg border bg-background px-3 py-2 text-sm shadow-sm", className)}
        {...props}
      >
        <div className="grid gap-0.5">
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-1 w-4 rounded-sm"
                style={{
                  backgroundColor: item.color,
                }}
              />
              {formatter ? (
                formatter(item.value, item.dataKey, item)
              ) : (
                <>
                  <span className="font-medium text-muted-foreground">{item.name}</span>
                  <span>{item.value}</span>
                </>
              )}
            </div>
          ))}
        </div>
        {!hideLabel && label && (
          <div className="mt-2 border-t pt-2 text-muted-foreground">
            {labelFormatter ? labelFormatter(label) : label}
          </div>
        )}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  align?: "left" | "center" | "right"
  verticalAlign?: "top" | "middle" | "bottom"
  layout?: "horizontal" | "vertical"
  payload?: Array<{
    value: string
    type: string
    id: string
    color: string
  }>
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className, content, payload, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-wrap items-center gap-4", className)} {...props}>
        {content ?? (
          <>
            {payload?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-2 w-4 rounded-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </>
        )}
      </div>
    )
  },
)
ChartLegend.displayName = "ChartLegend"

interface ChartLegendContentProps extends React.HTMLAttributes<HTMLDivElement> {
  nameKey?: string
}

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ className, nameKey = "name", ...props }, ref) => {
    const { payload } = props as any

    return (
      <div ref={ref} className={cn("flex flex-wrap items-center gap-4", className)} {...props}>
        {payload?.map((item: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-4 rounded-sm"
              style={{
                backgroundColor: item.color,
              }}
            />
            <span className="text-sm font-medium">{nameKey ? item.payload[nameKey] : item.value}</span>
          </div>
        ))}
      </div>
    )
  },
)
ChartLegendContent.displayName = "ChartLegendContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent }
