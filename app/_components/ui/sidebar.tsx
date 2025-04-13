"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft } from "lucide-react"

import { cn } from "@/app/lib/utils"

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-50 flex w-[--sidebar-width] flex-col border-r bg-background transition-all duration-300 ease-in-out data-[expanded=false]:w-[--sidebar-width-collapsed] data-[expanded=false]:items-center",
  {
    variants: {
      variant: {
        default: "border-r bg-background",
        outline: "border-r bg-background",
      },
      size: {
        default: "[--sidebar-width:280px] [--sidebar-width-collapsed:80px]",
        sm: "[--sidebar-width:240px] [--sidebar-width-collapsed:64px]",
        lg: "[--sidebar-width:320px] [--sidebar-width-collapsed:96px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  expanded?: boolean
}

const SidebarContext = React.createContext<{
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}>({
  expanded: true,
  setExpanded: () => undefined,
})

const useSidebar = () => {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

const SidebarProvider = ({
  children,
  defaultExpanded = true,
}: {
  children: React.ReactNode
  defaultExpanded?: boolean
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded)

  return <SidebarContext.Provider value={{ expanded, setExpanded }}>{children}</SidebarContext.Provider>
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, size, expanded: expandedProp, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expandedProp ?? expanded}
        className={cn(sidebarVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expanded}
        className={cn("flex h-14 items-center gap-2 border-b px-4 data-[expanded=false]:justify-center", className)}
        {...props}
      />
    )
  },
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex-1 overflow-auto", className)} {...props} />
  },
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expanded}
        className={cn("flex items-center gap-2 border-t p-4 data-[expanded=false]:justify-center", className)}
        {...props}
      />
    )
  },
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { expanded, setExpanded } = useSidebar()

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <ChevronLeft className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "rotate-180")} />
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expanded}
        className={cn(
          "flex flex-1 flex-col transition-all duration-300 ease-in-out data-[expanded=true]:ml-[--sidebar-width] data-[expanded=false]:ml-[--sidebar-width-collapsed]",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarInset.displayName = "SidebarInset"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expanded}
        className={cn("py-2 data-[expanded=false]:items-center data-[expanded=false]:justify-center", className)}
        {...props}
      />
    )
  },
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <div
        ref={ref}
        data-expanded={expanded}
        className={cn("px-4 py-1 text-xs font-medium text-muted-foreground data-[expanded=false]:sr-only", className)}
        {...props}
      />
    )
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("", className)} {...props} />
  },
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "relative flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-3 text-base",
      },
      isActive: {
        true: "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, size, isActive = false, asChild = false, ...props }, ref) => {
    const { expanded } = useSidebar()
    const Comp = asChild ? React.Fragment : "button"

    return (
      <Comp
        ref={ref}
        data-expanded={expanded}
        data-active={isActive}
        className={cn(
          sidebarMenuButtonVariants({ variant, size, isActive, className }),
          "data-[expanded=false]:justify-center data-[expanded=false]:px-0 data-[expanded=false]:py-2",
        )}
        {...props}
      />
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    const { expanded } = useSidebar()

    return (
      <input
        ref={ref}
        data-expanded={expanded}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[expanded=false]:hidden",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarInput.displayName = "SidebarInput"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("absolute inset-y-0 right-0 w-px bg-border opacity-50", className)} {...props} />
    )
  },
)
SidebarRail.displayName = "SidebarRail"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInput,
  SidebarRail,
  SidebarProvider,
  useSidebar,
}
