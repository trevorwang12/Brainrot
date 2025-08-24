import { getNewsArticleBySlug, getNewsArticles } from '@/lib/content'
import { parseMarkdown } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { Metadata } from 'next'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getNewsArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const article = getNewsArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Steal a Brainrot News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: article.imageUrl ? [article.imageUrl] : undefined,
    },
  }
}

export default function NewsArticlePage({ params }: NewsPageProps) {
  const article = getNewsArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefbf3' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm" style={{ color: '#8b7355' }}>
            <li>
              <Link href="/" className="hover:text-purple-700 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/news" className="hover:text-purple-700 transition-colors">
                News
              </Link>
            </li>
            <li>/</li>
            <li className="truncate" style={{ color: '#4a4037' }}>{article.title}</li>
          </ol>
        </nav>

        <article className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#fffef9', border: '1px solid #f0ebdc' }}>
          {/* Article Header */}
          <header className="px-8 pt-8 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#e8f4fd', color: '#1e40af' }}>
                {article.category}
              </span>
              {article.featured && (
                <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              {article.title}
            </h1>

            <div className="flex items-center justify-between text-sm mb-6" style={{ color: '#666666' }}>
              <div className="flex items-center space-x-4">
                <span>Author: {article.author}</span>
                <span>Published: {new Date(article.publishedAt).toLocaleDateString('en-US')}</span>
                {article.updatedAt && (
                  <span>Updated: {new Date(article.updatedAt).toLocaleDateString('en-US')}</span>
                )}
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: '#333333' }}>
              {article.summary}
            </p>
          </header>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="px-8 pb-6">
              <OptimizedImage
                src={article.imageUrl}
                alt={article.title}
                width={800}
                height={400}
                className="w-full rounded-lg object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="px-8 pb-8">
            <div 
              className="prose prose-lg max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(article.content) }}
            />
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="px-8 pb-8">
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#000000' }}>Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#f0ebdc', color: '#6b5b73' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Back to News */}
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center font-medium transition-colors back-link"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News List
          </Link>
        </div>
      </div>
    </div>
  )
}