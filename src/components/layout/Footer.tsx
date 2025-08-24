'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-primary text-text-primary border-t border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-purple">Steal a Brainrot News</h3>
            <p className="text-text-secondary mb-4">
              Latest game updates, guides and strategies to keep you up to date with the game.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 text-accent-gold tracking-wide">Content</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Game Guides
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Game Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 text-accent-gold tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-accent-purple transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2025 Steal a Brainrot News. All rights reserved.
          </p>
          <p className="text-text-muted text-sm mt-2 md:mt-0">
            Made with <span className="text-accent-orange">❤️</span> for the Steal a Brainrot community
          </p>
        </div>
      </div>
    </footer>
  )
}