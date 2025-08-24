import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Game Reviews - Steal a Brainrot News',
  description: 'Read comprehensive reviews of Steal a Brainrot updates, features, and gameplay mechanics from our expert reviewers.',
}

export default function ReviewsPage() {
  const reviews = [
    {
      id: 'latest-update-review',
      title: 'Major Update 2025: Revolutionary Features Review',
      summary: 'An in-depth analysis of the latest major update featuring new base customization, enhanced multiplayer, and performance improvements.',
      rating: 9.5,
      author: 'GameReview Pro',
      publishedAt: '2025-01-24',
      category: 'Update Review',
      imageUrl: '/images/reviews/major-update-review.jpg',
      pros: ['Amazing new features', 'Improved performance', 'Better customization'],
      cons: ['Learning curve', 'Some bugs on launch']
    },
    {
      id: 'brainrot-fusion-review',
      title: 'Brainrot Fusion System: Complete Analysis',
      summary: 'A comprehensive review of the new fusion mechanics, including cost-benefit analysis and strategic implications.',
      rating: 8.7,
      author: 'Strategy Expert',
      publishedAt: '2025-01-20',
      category: 'Feature Review',
      imageUrl: '/images/reviews/fusion-system-review.jpg',
      pros: ['Strategic depth', 'Fair pricing', 'Balanced mechanics'],
      cons: ['Complex for beginners', 'Limited fusion options']
    },
    {
      id: 'multiplayer-review',
      title: 'Enhanced Multiplayer Experience Review',
      summary: 'How the new multiplayer features stack up against competition and improve the social gaming experience.',
      rating: 9.2,
      author: 'Community Reviewer',
      publishedAt: '2025-01-18',
      category: 'Feature Review',
      imageUrl: '/images/reviews/multiplayer-review.jpg',
      pros: ['Better connectivity', 'New social features', 'Cross-platform play'],
      cons: ['Server stability issues', 'Voice chat quality']
    },
    {
      id: 'ui-overhaul-review',
      title: 'User Interface Overhaul: Design Review',
      summary: 'A detailed look at the redesigned user interface, accessibility improvements, and user experience enhancements.',
      rating: 8.9,
      author: 'UX Designer',
      publishedAt: '2025-01-15',
      category: 'Design Review',
      imageUrl: '/images/reviews/ui-design-review.jpg',
      pros: ['Clean design', 'Better accessibility', 'Intuitive navigation'],
      cons: ['Adjustment period', 'Missing some shortcuts']
    },
    {
      id: 'economy-balance-review',
      title: 'Economic Balance Changes Review',
      summary: 'Analysis of the recent economy adjustments and their impact on gameplay progression and player satisfaction.',
      rating: 7.8,
      author: 'Economy Analyst',
      publishedAt: '2025-01-12',
      category: 'Balance Review',
      imageUrl: '/images/reviews/economy-balance-review.jpg',
      pros: ['More balanced progression', 'Fairer pricing', 'Reduced grind'],
      cons: ['Veteran player concerns', 'Market adjustments needed']
    },
    {
      id: 'mobile-optimization-review',
      title: 'Mobile Optimization: Performance Review',
      summary: 'How well does Steal a Brainrot perform on mobile devices after the latest optimization update?',
      rating: 8.5,
      author: 'Mobile Gaming Expert',
      publishedAt: '2025-01-10',
      category: 'Performance Review',
      imageUrl: '/images/reviews/mobile-optimization-review.jpg',
      pros: ['Smooth performance', 'Better battery life', 'Touch controls'],
      cons: ['Small screen limitations', 'Heat generation']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Game Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert reviews and analysis of Steal a Brainrot updates, features, and gameplay mechanics
          </p>
        </div>

        {/* Review Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              All Reviews
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Update Reviews
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Feature Reviews
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Performance Reviews
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Balance Reviews
            </button>
          </div>
        </div>

        {/* Featured Review */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
          <div className="p-8 text-white">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                Featured Review
              </span>
              <div className="flex items-center">
                <div className="flex text-yellow-300 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold">9.5/10</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">{reviews[0].title}</h2>
            <p className="text-lg mb-6 text-white/90">{reviews[0].summary}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{reviews[0].author}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{reviews[0].publishedAt}</span>
              </div>
            </div>
            <Link 
              href={`/reviews/${reviews[0].id}`}
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Review
            </Link>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(1).map((review) => (
            <article key={review.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <Image
                  src={review.imageUrl}
                  alt={review.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {review.category}
                  </span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(Math.floor(review.rating))].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{review.rating}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/reviews/${review.id}`} className="hover:text-blue-600 transition-colors">
                    {review.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{review.summary}</p>
                
                {/* Pros and Cons Preview */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-green-600 font-medium mb-1">Pros</div>
                      <ul className="text-gray-600 space-y-1">
                        {review.pros.slice(0, 2).map((pro, index) => (
                          <li key={index}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-red-600 font-medium mb-1">Cons</div>
                      <ul className="text-gray-600 space-y-1">
                        {review.cons.slice(0, 2).map((con, index) => (
                          <li key={index}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {review.author}</span>
                  <span>{review.publishedAt}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}