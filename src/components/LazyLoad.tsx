'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode
  height?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function LazyLoad({
  children,
  height = 200,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
}: LazyLoadProps) {
  const [, setIsIntersecting] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? (
        children
      ) : (
        <div
          className="bg-gray-100 animate-pulse rounded-lg flex items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
    </div>
  )
}