"use client"

import { useState, useEffect } from "react"

interface LocationTagProps {
  city?: string
  country?: string
  timezone?: string
  /** IANA time zone (e.g. "Europe/Berlin"). When set, the clock shows that
   *  zone's local time regardless of the visitor's location. */
  ianaTimeZone?: string
}

export function LocationTag({
  city = "San Francisco",
  country = "USA",
  timezone = "PST",
  ianaTimeZone,
}: LocationTagProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          ...(ianaTimeZone ? { timeZone: ianaTimeZone } : {}),
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [ianaTimeZone])

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-sm transition-all duration-500 ease-out hover:border-slate-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.04)]"
    >
      {/* Live pulse indicator */}
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      {/* Location text */}
      <div className="flex items-center gap-2 overflow-hidden">
        <span
          className="text-sm font-medium text-slate-900 transition-all duration-500"
          style={{
            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}
        >
          {city}, {country}
        </span>

        <span
          className="absolute left-11 text-sm font-medium text-slate-900 transition-all duration-500"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          {currentTime} {timezone}
        </span>
      </div>

      {/* Arrow indicator */}
      <svg
        className="h-3 w-3 text-slate-500 transition-all duration-300"
        style={{
          transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  )
}
