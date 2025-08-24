import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Steal a Brainrot News',
  description: 'Read our terms of service to understand the rules and guidelines for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 24, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Steal a Brainrot News (&ldquo;the Service&rdquo;), you accept and agree to be bound by the 
              terms and provision of this agreement. These Terms of Service (&ldquo;Terms&rdquo;) apply to all visitors, users, 
              and others who access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 mb-6">
              Steal a Brainrot News is a gaming news and information website that provides content related to the 
              Roblox game &ldquo;Steal a Brainrot,&rdquo; including news articles, strategy guides, community updates, and 
              related gaming content.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">Permission is granted to temporarily access the materials on Steal a Brainrot News for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to reverse engineer any software contained on the website</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
            <p className="text-gray-700 mb-4">When you create an account with us, you must provide information that is accurate, complete, and current. You are responsible for safeguarding your account and password and for all activities that occur under your account.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You may not use our Service:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>• To submit false or misleading information</li>
              <li>• To upload or transmit viruses or any other type of malicious code</li>
              <li>• To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>• For any obscene or immoral purpose</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content</h2>
            <p className="text-gray-700 mb-4">Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&ldquo;Content&rdquo;). You are responsible for Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            
            <p className="text-gray-700 mb-6">By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
            <p className="text-gray-700 mb-4">You may not use our Service to:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>• Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
              <li>• Engage in any other conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of the Service</li>
              <li>• Use any information obtained from the Service to harass, abuse, or harm another person</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-6">
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of Steal a Brainrot News and its licensors. The Service is protected by copyright, trademark, 
              and other laws. Our trademarks and trade dress may not be used in connection with any product or service 
              without our prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the 
              Service, to understand our practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
              not limited to a breach of the Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The information on this website is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law, 
              this Company excludes all representations, warranties, conditions and terms related to our website and 
              the use of this website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Steal a Brainrot News, nor its directors, employees, partners, agents, suppliers, or 
              affiliates, be liable for any indirect, incidental, punitive, consequential, or special damages, including 
              without limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
              use of the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which we 
              operate, without regard to its conflict of law provisions. Our failure to enforce any right or provision 
              of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@stealbrainrotnews.com<br />
                <strong>Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">/contact</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}