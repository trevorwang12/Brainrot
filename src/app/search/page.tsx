import { Suspense } from 'react'
import SearchClient from '@/components/SearchClient'

export const metadata = {
  title: 'Search - Steal a Brainrot News',
  description: 'Search through our collection of news articles and strategy guides for Steal a Brainrot',
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    }>
      <SearchClient />
    </Suspense>
  )
}