'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import NewsCard from '@/components/ui/NewsCard'
import GuideCard from '@/components/ui/GuideCard'
import { NewsArticle, Guide } from '@/types/content'

export default function SearchClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState(searchParams?.get('q') || '')
  const [results, setResults] = useState<{
    news: NewsArticle[]
    guides: Guide[]
  }>({ news: [], guides: [] })
  const [loading, setLoading] = useState(false)

  const searchContent = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults({ news: [], guides: [] })
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      
      setResults({
        news: data.news || [],
        guides: data.guides || []
      })
    } catch (error) {
      console.error('Search error:', error)
      setResults({ news: [], guides: [] })
    }
    
    setLoading(false)
  }

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery.trim())}`)
    } else {
      router.push('/search')
    }
  }

  useEffect(() => {
    const urlQuery = searchParams?.get('q') || ''
    if (urlQuery !== query) {
      setQuery(urlQuery)
    }
  }, [searchParams, query])

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      searchContent(query)
    }, 300)

    return () => clearTimeout(delayedSearch)
  }, [query])

  const totalResults = results.news.length + results.guides.length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Search</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find news, guides, and strategies for Steal a Brainrot
          </p>
          
          {/* Search Input */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for guides, news, strategies..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-2">Searching...</p>
          </div>
        )}

        {query && !loading && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Search Results for &ldquo;{query}&rdquo;
            </h2>
            <p className="text-gray-600">
              Found {totalResults} result{totalResults !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* News Results */}
        {results.news.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">
              News Articles ({results.news.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.news.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Guides Results */}
        {results.guides.length > 0 && (
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-purple-600 mb-6">
              Strategy Guides ({results.guides.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {query && !loading && totalResults === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse our categories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/news"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse News
              </Link>
              <Link 
                href="/guides"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!query && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Search</h3>
            <p className="text-gray-600 mb-8">
              Search through our collection of news articles and strategy guides
            </p>
            
            {/* Popular Searches */}
            <div className="max-w-2xl mx-auto">
              <h4 className="text-sm font-semibold text-gray-700 mb-4">Popular Searches:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['rebirth', 'secret brainrot', 'stealing', 'fusion', 'base defense', 'power-ups'].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}