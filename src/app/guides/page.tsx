import { getGuides } from '@/lib/content'
import GuideCard from '@/components/ui/GuideCard'

export default function GuidesPage() {
  const guides = getGuides()
  const featuredGuides = guides.filter(guide => guide.featured)
  const regularGuides = guides.filter(guide => !guide.featured)

  // Group guides by difficulty
  const beginnerGuides = regularGuides.filter(guide => guide.difficulty === 'beginner')
  const intermediateGuides = regularGuides.filter(guide => guide.difficulty === 'intermediate')
  const advancedGuides = regularGuides.filter(guide => guide.difficulty === 'advanced')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Game Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner tutorials to advanced techniques, here are all the Steal a Brainrot strategy guides you need
          </p>
        </div>

        {/* Featured Guides */}
        {featuredGuides.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} featured />
              ))}
            </div>
          </section>
        )}

        {/* Beginner Guides */}
        {beginnerGuides.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Beginner
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Beginner Guides</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {/* Intermediate Guides */}
        {intermediateGuides.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                Intermediate
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Intermediate Strategies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intermediateGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {/* Advanced Guides */}
        {advancedGuides.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                Advanced
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Advanced Techniques</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {/* No Guides */}
        {guides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Guides Available</h3>
            <p className="text-gray-600">Stay tuned for more exciting guide content</p>
          </div>
        )}
      </div>
    </div>
  )
}