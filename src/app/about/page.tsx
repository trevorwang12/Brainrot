import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Steal a Brainrot News',
  description: 'Learn about Steal a Brainrot News - your premier destination for gaming news, strategies, and community updates.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier destination for Steal a Brainrot gaming news, strategies, and community updates
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Steal a Brainrot News is dedicated to providing the gaming community with the most comprehensive, 
              accurate, and up-to-date information about the popular Roblox game &ldquo;Steal a Brainrot.&rdquo; We strive to 
              be the go-to resource for players seeking news, strategies, guides, and community insights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li><strong>Breaking News:</strong> Latest updates, patches, and announcements</li>
              <li><strong>Strategy Guides:</strong> In-depth tutorials and advanced gameplay techniques</li>
              <li><strong>Community Coverage:</strong> Player spotlights, events, and competitions</li>
              <li><strong>Expert Analysis:</strong> Professional insights into game mechanics and meta</li>
              <li><strong>Regular Updates:</strong> Fresh content published daily</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our editorial team consists of experienced Steal a Brainrot players, gaming journalists, and 
              community experts who are passionate about delivering high-quality content. We combine years 
              of gameplay experience with professional writing and analysis skills to bring you the best 
              possible coverage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community First</h2>
            <p className="text-gray-700 mb-6">
              We believe in putting the community first. Our content is created by players, for players. 
              We actively engage with our readers, incorporate feedback, and ensure our coverage reflects 
              what the community truly wants and needs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quality & Accuracy</h2>
            <p className="text-gray-700 mb-6">
              Every piece of content we publish undergoes thorough fact-checking and review. We test all 
              strategies and verify all information before publication to ensure our readers receive only 
              the most reliable and actionable content.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions, suggestions, or want to contribute? We&rsquo;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Contact Us
            </a>
            <a 
              href="mailto:info@stealbrainrotnews.com" 
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}