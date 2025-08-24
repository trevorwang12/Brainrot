import { NextRequest, NextResponse } from 'next/server'
import { getNewsArticles, getGuides } from '@/lib/content'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query || !query.trim()) {
    return NextResponse.json({ news: [], guides: [] })
  }

  try {
    const allNews = getNewsArticles()
    const allGuides = getGuides()
    
    const lowerQuery = query.toLowerCase()
    
    const filteredNews = allNews.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.summary.toLowerCase().includes(lowerQuery) ||
      article.content.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      article.category.toLowerCase().includes(lowerQuery)
    )
    
    const filteredGuides = allGuides.filter(guide => 
      guide.title.toLowerCase().includes(lowerQuery) ||
      guide.summary.toLowerCase().includes(lowerQuery) ||
      guide.content.toLowerCase().includes(lowerQuery) ||
      guide.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      guide.category.toLowerCase().includes(lowerQuery)
    )
    
    return NextResponse.json({
      news: filteredNews,
      guides: filteredGuides
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}