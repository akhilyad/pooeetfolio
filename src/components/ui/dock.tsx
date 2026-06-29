"use client"

import * as React from "react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface DockProps {
  className?: string
  children: React.ReactNode
  maxAdditionalSize?: number
  iconSize?: number
}

interface DockIconProps {
  className?: string
  href: string
  name: string
  icon: React.ReactNode
  handleIconHover?: (e: React.MouseEvent<HTMLLIElement>) => void
  iconSize?: number
}

type ScaleValueParams = [number, number]

export const scaleValue = function (
  value: number,
  from: ScaleValueParams,
  to: ScaleValueParams
): number {
  const scale = (to[1] - to[0]) / (from[1] - from[0])
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
  return Math.floor(capped * scale + to[0])
}

export function DockIcon({
  className,
  href,
  name,
  icon,
  handleIconHover,
  iconSize = 55,
}: DockIconProps) {
  return (
    <li
      style={
        {
          transition: "all cubic-bezier(0.25, 1, 0.5, 1) 150ms",
          "--icon-size": `${iconSize}px`,
        } as React.CSSProperties
      }
      onMouseMove={handleIconHover}
      className={cn(
        "dock-icon group/li flex items-center justify-center cursor-pointer",
        "h-[var(--icon-size)] w-[var(--icon-size)]",
        "px-[calc(var(--icon-size)*0.075)]",
        "hover:-mt-[calc(var(--icon-size)/2)]",
        "hover:h-[calc(var(--icon-size)*1.5)]",
        "hover:w-[calc(var(--icon-size)*1.5)]",
        className
      )}
    >
      <a
        href={href}
        className="group/a relative aspect-square w-full rounded-[10px] border border-slate-200 bg-gradient-to-t from-slate-50 to-white p-2 shadow-sm hover:shadow-md transition-all duration-200"
      >
        <span className="absolute top-[-45px] left-1/2 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium whitespace-nowrap text-slate-800 opacity-0 transition-all duration-200 group-hover/li:opacity-100 shadow-lg pointer-events-none">
          {name}
        </span>
        <div className="flex h-full w-full items-center justify-center text-slate-700 group-hover/a:text-emerald-700 transition-colors">
          {icon}
        </div>
      </a>
    </li>
  )
}

export function Dock({
  className,
  children,
  maxAdditionalSize = 5,
  iconSize = 55,
}: DockProps) {
  const dockRef = useRef<HTMLDivElement | null>(null)

  const handleIconHover = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return
    const mousePos = e.clientX
    const iconPosLeft = e.currentTarget.getBoundingClientRect().left
    const iconWidth = e.currentTarget.getBoundingClientRect().width

    const cursorDistance = (mousePos - iconPosLeft) / iconWidth
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    )

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    )

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    )
  }

  return (
    <nav 
      ref={dockRef} 
      role="navigation" 
      aria-label="Main Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <ul
        className={cn(
          "flex items-center rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl p-2 shadow-2xl shadow-slate-900/10",
          className
        )}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement<DockIconProps>(child)
            ? React.cloneElement(child as React.ReactElement<DockIconProps>, {
                handleIconHover,
                iconSize,
              })
            : child
        )}
      </ul>
    </nav>
  )
}