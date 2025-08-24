'use client'

import { useEffect, useState } from 'react'

interface PerformanceMonitorProps {
  enabled?: boolean
}

export default function PerformanceMonitor({ enabled }: PerformanceMonitorProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || (!enabled && process.env.NODE_ENV !== 'development') || typeof window === 'undefined') return

    // Measure Core Web Vitals
    const measureCoreWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
          console.log('LCP:', lastEntry.startTime)
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number }
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          })
        })
        fidObserver.observe({ type: 'first-input', buffered: true })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number }
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value
              console.log('CLS:', clsValue)
            }
          })
        })
        clsObserver.observe({ type: 'layout-shift', buffered: true })
      }

      // Time to First Byte (TTFB)
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          console.log('TTFB:', navigation.responseStart - navigation.requestStart)
        }
      }
    }

    // Run measurements after page load
    if (document.readyState === 'complete') {
      measureCoreWebVitals()
    } else {
      window.addEventListener('load', measureCoreWebVitals)
    }

    // Measure JavaScript execution time
    const measureScriptTime = () => {
      const start = performance.now()
      // Simulate measurement
      setTimeout(() => {
        const end = performance.now()
        console.log('Script execution time:', end - start, 'ms')
      }, 0)
    }

    measureScriptTime()

    return () => {
      window.removeEventListener('load', measureCoreWebVitals)
    }
  }, [enabled, isClient])

  return null
}