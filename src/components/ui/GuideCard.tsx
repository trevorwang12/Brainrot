import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import { Guide } from '@/types/content'

interface GuideCardProps {
  guide: Guide
  featured?: boolean
}

const difficultyColors = {
  beginner: 'bg-accent-green/20 text-accent-green border border-accent-green/30',
  intermediate: 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30',
  advanced: 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30'
}

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
}

export default function GuideCard({ guide, featured = false }: GuideCardProps) {
  return (
    <article className={`bg-gradient-card border border-dark-600 rounded-lg shadow-card overflow-hidden hover:shadow-card-hover hover:border-accent-purple/50 transition-all duration-200 ${featured ? 'col-span-2 lg:col-span-1 ring-2 ring-accent-purple/30' : ''}`}>
      <Link href={`/guides/${guide.slug}`}>
        <div className="relative">
          {guide.imageUrl && (
            <OptimizedImage
              src={guide.imageUrl}
              alt={guide.title}
              width={400}
              height={featured ? 300 : 200}
              className="w-full object-cover border-b border-dark-600"
              priority={featured}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {guide.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-accent-purple to-accent-gold text-text-primary px-2 py-1 text-xs font-semibold rounded shadow-lg">
                Featured Guide
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${difficultyColors[guide.difficulty]}`}>
              {difficultyLabels[guide.difficulty]}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-accent-gold/20 text-accent-gold border border-accent-gold/30 text-xs font-medium px-2.5 py-0.5 rounded">
              {guide.category}
            </span>
            <span className="text-text-muted text-sm">
              {new Date(guide.publishedAt).toLocaleDateString('en-US')}
            </span>
          </div>
          
          <h2 className={`font-bold text-text-primary mb-2 hover:text-accent-purple transition-colors duration-200 ${featured ? 'text-xl' : 'text-lg'}`}>
            {guide.title}
          </h2>
          
          <p className="text-text-secondary mb-4 line-clamp-3">
            {guide.summary}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">
              Author: {guide.author}
            </span>
            
            <div className="flex gap-1">
              {guide.tags.slice(0, 2).map((tag) => (
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