import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Steal a Brainrot News',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: January 24, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Steal a Brainrot News (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website and use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Name and contact information when you contact us</li>
              <li>• Email address for newsletter subscriptions</li>
              <li>• Comments and feedback you submit</li>
              <li>• Account information if you create a user account</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">When you visit our website, we automatically collect:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• IP address and browser information</li>
              <li>• Device information and operating system</li>
              <li>• Pages visited and time spent on the site</li>
              <li>• Referral sources and search terms used</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Respond to your inquiries and provide customer support</li>
              <li>• Send newsletters and updates (with your consent)</li>
              <li>• Analyze website usage and optimize user experience</li>
              <li>• Prevent fraud and enhance security</li>
              <li>• Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share information in these situations:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• With service providers who help operate our website</li>
              <li>• When required by law or legal process</li>
              <li>• To protect our rights, property, or safety</li>
              <li>• With your explicit consent</li>
              <li>• In connection with business transfers or mergers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Types of Cookies We Use:</h3>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• <strong>Essential cookies:</strong> Required for basic site functionality</li>
              <li>• <strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li>• <strong>Preference cookies:</strong> Remember your settings and preferences</li>
              <li>• <strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
              or electronic storage method is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="text-gray-700 mb-6 space-y-1">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate or incomplete data</li>
              <li>• Delete your personal information</li>
              <li>• Object to processing of your data</li>
              <li>• Request data portability</li>
              <li>• Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services. This Privacy Policy does not 
              apply to those external sites. We encourage you to read the privacy policies of any third-party 
              services you use.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&rsquo;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to children under 13. We do not knowingly collect personal information 
              from children under 13. If you become aware that a child has provided us with personal information, 
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to 
              review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@stealbrainrotnews.com<br />
                <strong>Contact Form:</strong> <a href="/contact" className="text-blue-600 hover:underline">/contact</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}