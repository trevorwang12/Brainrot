'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-gradient-primary text-text-primary sticky top-0 z-50 border-b border-dark-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold hover:text-accent-purple transition-colors duration-200">
              Steal a Brainrot News
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent-gold transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/news" className="hover:text-accent-gold transition-colors duration-200 font-medium">
              Latest News
            </Link>
            <Link href="/guides" className="hover:text-accent-gold transition-colors duration-200 font-medium">
              Game Guides
            </Link>
            <Link href="/reviews" className="hover:text-accent-gold transition-colors duration-200 font-medium">
              Game Reviews
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-dark-800 text-text-primary px-4 py-2 pr-10 rounded-lg border border-dark-600 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200 placeholder-text-muted"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-accent-gold transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <button
            className="md:hidden flex items-center text-text-primary hover:text-accent-gold transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-dark-700/50">
              <Link href="/" className="block px-3 py-2 hover:bg-dark-800 rounded-lg text-text-primary hover:text-accent-gold transition-colors duration-200">
                Home
              </Link>
              <Link href="/news" className="block px-3 py-2 hover:bg-dark-800 rounded-lg text-text-primary hover:text-accent-gold transition-colors duration-200">
                Latest News
              </Link>
              <Link href="/guides" className="block px-3 py-2 hover:bg-dark-800 rounded-lg text-text-primary hover:text-accent-gold transition-colors duration-200">
                Game Guides
              </Link>
              <Link href="/reviews" className="block px-3 py-2 hover:bg-dark-800 rounded-lg text-text-primary hover:text-accent-gold transition-colors duration-200">
                Game Reviews
              </Link>
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full bg-dark-800 text-text-primary px-4 py-2 pr-10 rounded-lg border border-dark-600 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200 placeholder-text-muted"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-accent-gold transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}