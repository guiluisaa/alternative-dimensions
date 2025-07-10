import * as React from "react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size = 20, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-block animate-spin rounded-full border-4 border-neutral-light-gray border-t-neutral-black",
                    className
                )}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
                {...props}
            />
        )
    }
)
Spinner.displayName = "Spinner"

export { Spinner }