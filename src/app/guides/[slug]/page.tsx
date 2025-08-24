import { getGuideBySlug, getGuides } from '@/lib/content'
import { parseMarkdown } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import { Metadata } from 'next'

interface GuidePageProps {
  params: {
    slug: string
  }
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
}

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
}

export async function generateStaticParams() {
  const guides = getGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  
  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: `${guide.title} | Steal a Brainrot Guides`,
    description: guide.summary,
    openGraph: {
      title: guide.title,
      description: guide.summary,
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: [guide.author],
      images: guide.imageUrl ? [guide.imageUrl] : undefined,
    },
  }
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
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
              <Link href="/guides" className="hover:text-purple-700 transition-colors">
                Guides
              </Link>
            </li>
            <li>/</li>
            <li className="truncate" style={{ color: '#4a4037' }}>{guide.title}</li>
          </ol>
        </nav>

        <article className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#fffef9', border: '1px solid #f0ebdc' }}>
          {/* Article Header */}
          <header className="px-8 pt-8 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#f3e8ff', color: '#7c3aed' }}>
                {guide.category}
              </span>
              <span className={`text-sm font-medium px-3 py-1 rounded ${difficultyColors[guide.difficulty]}`}>
                {difficultyLabels[guide.difficulty]}
              </span>
              {guide.featured && (
                <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#7c3aed', color: 'white' }}>
                  Featured Guide
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              {guide.title}
            </h1>

            <div className="flex items-center justify-between text-sm mb-6" style={{ color: '#666666' }}>
              <div className="flex items-center space-x-4">
                <span>Author: {guide.author}</span>
                <span>Published: {new Date(guide.publishedAt).toLocaleDateString('en-US')}</span>
                {guide.updatedAt && (
                  <span>Updated: {new Date(guide.updatedAt).toLocaleDateString('en-US')}</span>
                )}
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: '#333333' }}>
              {guide.summary}
            </p>
          </header>

          {/* Featured Image */}
          {guide.imageUrl && (
            <div className="px-8 pb-6">
              <OptimizedImage
                src={guide.imageUrl}
                alt={guide.title}
                width={800}
                height={400}
                className="w-full rounded-lg object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Guide Content */}
          <div className="px-8 pb-8">
            <div 
              className="prose prose-lg max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(guide.content) }}
            />
          </div>

          {/* Tags */}
          {guide.tags.length > 0 && (
            <div className="px-8 pb-8">
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#000000' }}>Tags</h3>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
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

        {/* Guide Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guides"
            className="inline-flex items-center font-medium transition-colors guide-back-link"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Guides List
          </Link>

          <div className="flex space-x-4">
            <button className="inline-flex items-center font-medium transition-colors guide-action-button">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Bookmark Guide
            </button>
            <button className="inline-flex items-center font-medium transition-colors guide-action-button">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}