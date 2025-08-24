import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import { NewsArticle } from '@/types/content'

interface NewsCardProps {
  article: NewsArticle
  featured?: boolean
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <article className={`bg-gradient-card border border-dark-600 rounded-lg shadow-card overflow-hidden hover:shadow-card-hover hover:border-accent-gold/50 transition-all duration-200 ${featured ? 'col-span-2 lg:col-span-1 ring-2 ring-accent-gold/30' : ''}`}>
      <Link href={`/news/${article.slug}`}>
        <div className="relative">
          {article.imageUrl && (
            <OptimizedImage
              src={article.imageUrl}
              alt={article.title}
              width={400}
              height={featured ? 300 : 200}
              className="w-full object-cover border-b border-dark-600"
              priority={featured}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {article.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-accent text-text-primary px-2 py-1 text-xs font-semibold rounded shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-accent-purple/20 text-accent-purple border border-accent-purple/30 text-xs font-medium px-2.5 py-0.5 rounded">
              {article.category}
            </span>
            <span className="text-text-muted text-sm">
              {new Date(article.publishedAt).toLocaleDateString('en-US')}
            </span>
          </div>
          
          <h2 className={`font-bold text-text-primary mb-2 hover:text-accent-gold transition-colors duration-200 ${featured ? 'text-xl' : 'text-lg'}`}>
            {article.title}
          </h2>
          
          <p className="text-text-secondary mb-4 line-clamp-3">
            {article.summary}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">
              Author: {article.author}
            </span>
            
            <div className="flex gap-1">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-text-muted bg-dark-800/50 border border-dark-600 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}