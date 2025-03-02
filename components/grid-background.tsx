"use client"

import { cn } from "@/lib/utils"

export function GridBackground({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="fixed inset-0 -z-50">
        {/* Rich gradient background base */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(4, 120, 87, 0.15), transparent 60%),
              radial-gradient(circle at top right, rgba(6, 95, 70, 0.15), transparent 60%),
              radial-gradient(at bottom left, rgba(4, 120, 87, 0.15), transparent 60%),
              radial-gradient(at bottom right, rgba(6, 78, 59, 0.15), transparent 60%),
              linear-gradient(to bottom right, #042f2e, #064e3b)
            `
          }}
        />

        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(
                45deg,
                transparent 0%,
                rgba(4, 120, 87, 0.1) 25%,
                transparent 50%,
                rgba(6, 95, 70, 0.1) 75%,
                transparent 100%
              )
            `,
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease infinite',
          }}
        />

        {/* Primary grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(4, 120, 87, 0.07) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(4, 120, 87, 0.07) 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-1px -1px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)'
          }}
        />

        {/* Secondary grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(4, 120, 87, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 120, 87, 0.05) 1px, transparent 1px)',
            backgroundSize: '150px 150px',
            backgroundPosition: '-1px -1px'
          }}
        />

        {/* Dot overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 15px 15px, rgba(4, 120, 87, 0.1) 2px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-1px -1px',
            opacity: 0.5
          }}
        />

        {/* Dynamic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(4, 120, 87, 0.2) 0%, transparent 75%)'
          }}
        />
      </div>
      {children}
    </div>
  )
}