import { getNewsArticles } from '@/lib/content'
import NewsCard from '@/components/ui/NewsCard'

export default function NewsPage() {
  const news = getNewsArticles()
  const featuredNews = news.filter(article => article.featured)
  const regularNews = news.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Game News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest Steal a Brainrot updates, news and official announcements
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((article) => (
                <NewsCard key={article.id} article={article} featured />
              ))}
            </div>
          </section>
        )}

        {/* All News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {featuredNews.length > 0 ? 'More News' : 'Latest News'}
          </h2>
          
          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No News Available</h3>
              <p className="text-gray-600">Stay tuned for more exciting content</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}