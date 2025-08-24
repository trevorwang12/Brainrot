import { getNewsArticles, getGuides } from '@/lib/content'
import LazyLoad from '@/components/LazyLoad'
import Link from 'next/link'
import { Suspense } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steal a Brainrot - Ultimate Guide Hub for Roblox\'s Premier Tycoon Game',
  description: 'Master Steal a Brainrot with expert guides, latest updates, and proven strategies. Learn brainrot collection, base defense, fusion mechanics, and ritual systems from top players.',
  keywords: 'steal a brainrot, steal a brainrot guide, steal a brainrot tips, steal a brainrot strategy, steal a brainrot roblox, brainrot game, roblox tycoon, steal a brainrot fusion, steal a brainrot rituals, steal a brainrot collection',
  openGraph: {
    title: 'Steal a Brainrot - Master the Ultimate Roblox Tycoon Game',
    description: 'Complete guides and strategies for Steal a Brainrot - from beginner basics to advanced rituals and fusion mechanics.',
    type: 'website',
    url: 'https://stealbrainrot.com',
  },
  alternates: {
    canonical: 'https://stealbrainrot.com',
  },
}

export default function Home() {
  const news = getNewsArticles().slice(0, 6)
  const guides = getGuides().slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Header Section */}
      <section className="bg-gradient-primary text-text-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-gold/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-accent-purple to-accent-gold bg-clip-text text-transparent leading-tight">
              Master Steal a Brainrot
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 max-w-4xl mx-auto text-text-secondary font-medium">
              The Ultimate Resource Hub for Roblox&apos;s Most Popular Tycoon Game
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-text-secondary/80 leading-relaxed">
              Discover advanced strategies, latest updates, and expert guides to dominate Steal a Brainrot. From beginner basics to legendary brainrot collection and ritual mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center">
              <Link 
                href="/guides/beginner-guide"
                className="group relative overflow-hidden bg-gradient-to-r from-accent-purple to-accent-gold text-white px-10 py-5 lg:px-14 lg:py-7 rounded-xl font-bold text-lg lg:text-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/20 hover:scale-105 transform min-w-[280px] lg:min-w-[320px] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 z-10">
                  <span className="text-xl group-hover:animate-bounce transition-transform">🚀</span>
                  <span className="font-semibold">Start Learning Steal a Brainrot</span>
                </div>
              </Link>
              
              <Link 
                href="/guides"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 lg:px-14 lg:py-7 rounded-xl font-bold text-lg lg:text-xl transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-105 transform min-w-[280px] lg:min-w-[320px] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 z-10">
                  <span className="text-xl group-hover:animate-pulse transition-transform">📚</span>
                  <span className="font-semibold">Browse All Guides</span>
                </div>
                <div className="absolute inset-0 ring-1 ring-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features Section */}
        <section className="py-20 lg:py-32">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Choose Our Steal a Brainrot Guides?
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Comprehensive coverage of every aspect of Steal a Brainrot gameplay, from basic mechanics to advanced strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "🧠",
                title: "Complete Brainrot Collection",
                description: "Master every brainrot rarity from Common to Secret. Learn optimal collection strategies, fusion mechanics, and market value analysis.",
                color: "accent-purple"
              },
              {
                icon: "🏰",
                title: "Advanced Base Defense",
                description: "Protect your valuable brainrots with proven defense layouts, security systems, and anti-theft strategies from expert players.",
                color: "accent-gold"
              },
              {
                icon: "⚗️",
                title: "Fusion Machine Mastery",
                description: "Unlock the secrets of the Fuse Machine. Discover optimal combinations, probability calculations, and cost-effective fusion strategies.",
                color: "accent-orange"
              },
              {
                icon: "🌟",
                title: "Sacred Ritual Systems",
                description: "Master cooperative gameplay with detailed ritual guides. Learn formation diagrams, timing strategies, and team coordination.",
                color: "accent-purple"
              },
              {
                icon: "💰",
                title: "Economic Optimization",
                description: "Maximize your profits with advanced economic strategies, market timing, and investment planning for sustainable growth.",
                color: "accent-gold"
              },
              {
                icon: "🔄",
                title: "Rebirth & Progression",
                description: "Optimize your rebirth cycles with proven strategies for maximum multiplier gains and efficient progression paths.",
                color: "accent-orange"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-card p-8 lg:p-10 rounded-2xl border border-dark-600 shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-accent-purple/30 group">
                <div className={`text-${feature.color} text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-text-primary mb-4 group-hover:text-accent-purple transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What is Steal a Brainrot Section */}
        <section className="py-20 lg:py-32">
          <div className="bg-gradient-card rounded-3xl border border-dark-600 p-8 lg:p-16">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                What is Steal a Brainrot?
              </h2>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Discover why millions of players are obsessed with Roblox&apos;s most addictive tycoon experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
                    The Ultimate Roblox Tycoon Game
                  </h3>
                  <p className="text-text-secondary mb-8 text-lg lg:text-xl leading-relaxed">
                    <strong className="text-accent-purple">Steal a Brainrot</strong> is a revolutionary Roblox tycoon game that combines collection mechanics, strategic gameplay, and competitive multiplayer action. With over <strong className="text-accent-gold">15.2 billion visits</strong>, it has become the most successful meme-based game on the platform.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Collect Rare Brainrots",
                      description: "Hunt for legendary brainrots across 7 rarity tiers, from Common to Secret",
                      color: "accent-purple"
                    },
                    {
                      icon: "⚔️",
                      title: "Strategic PvP Combat",
                      description: "Steal from other players while defending your own valuable collection",
                      color: "accent-gold"
                    },
                    {
                      icon: "🤝",
                      title: "Cooperative Rituals",
                      description: "Team up for sacred rituals that unlock exclusive Brainrot God rewards",
                      color: "accent-orange"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-dark-700/30 transition-colors duration-300">
                      <div className={`text-${item.color} text-2xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-2">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-800 p-8 lg:p-10 rounded-2xl border border-dark-600 hover:border-accent-purple/30 transition-colors duration-300">
                <h4 className="text-xl lg:text-2xl font-semibold text-text-primary mb-8 text-center">
                  Game Statistics
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "15.2B", label: "Total Visits", color: "accent-purple" },
                    { value: "1.3M+", label: "Peak Players", color: "accent-gold" },
                    { value: "7", label: "Rarity Tiers", color: "accent-orange" },
                    { value: "100+", label: "Unique Brainrots", color: "accent-purple" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl hover:bg-dark-700/50 transition-colors duration-300">
                      <div className={`text-3xl lg:text-4xl font-bold text-${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-text-secondary text-sm lg:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Master Section */}
        <section className="py-20 lg:py-32">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              How to Master Steal a Brainrot
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Follow our step-by-step progression guide to become a legendary Steal a Brainrot player
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "1",
                title: "Start Collecting",
                description: "Begin with basic brainrots and learn the collection mechanics",
                link: "/guides/beginner-guide",
                linkText: "Read Beginner Guide →"
              },
              {
                step: "2",
                title: "Build Your Base",
                description: "Design efficient layouts and implement security measures",
                link: "/guides/base-defense-mastery",
                linkText: "Learn Defense →"
              },
              {
                step: "3",
                title: "Master Fusion",
                description: "Use the Fuse Machine to create rare and powerful brainrots",
                link: "/guides/steal-a-brainrot-fuse-machine-complete-guide",
                linkText: "Fusion Guide →"
              },
              {
                step: "4",
                title: "Join Rituals",
                description: "Participate in cooperative rituals for exclusive rewards",
                link: "/guides/steal-a-brainrot-rituals-complete-guide",
                linkText: "Ritual Mastery →"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-accent w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl lg:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-text-primary mb-4 group-hover:text-accent-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm lg:text-base mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  href={item.link} 
                  className="text-accent-purple hover:text-accent-gold transition-colors text-sm lg:text-base font-medium inline-block group-hover:underline"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Play Section */}
        <section className="py-20 lg:py-32">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Steal a Brainrot Dominates Roblox
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover what makes Steal a Brainrot the most engaging tycoon experience on Roblox
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: "🎮",
                title: "Endless Gameplay Variety",
                description: "Unlike traditional tycoons, Steal a Brainrot offers multiple gameplay paths: peaceful collection, competitive PvP, cooperative rituals, and strategic trading.",
                features: [
                  "100+ unique brainrots to collect",
                  "7 distinct rarity tiers with special abilities", 
                  "Dynamic PvP stealing mechanics",
                  "Complex fusion and upgrade systems"
                ],
                color: "accent-purple"
              },
              {
                icon: "🌟",
                title: "Active Community & Updates",
                description: "Regular updates from Brazilian Spyder keep the game fresh with new brainrots, features, and events that maintain player engagement.",
                features: [
                  "Weekly content updates",
                  "Active developer community interaction",
                  "Seasonal events and crossovers", 
                  "Player feedback integration"
                ],
                color: "accent-gold"
              },
              {
                icon: "📈",
                title: "Proven Success & Longevity",
                description: "With 15.2 billion visits and consistent player growth, Steal a Brainrot has proven its staying power in the competitive Roblox ecosystem.",
                features: [
                  "Most visited meme-based Roblox game",
                  "Consistent top-10 platform ranking",
                  "Growing esports and streaming presence",
                  "Cross-platform mobile and PC support"
                ],
                color: "accent-orange"
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gradient-card p-8 lg:p-10 rounded-2xl border border-dark-600 hover:border-accent-purple/30 transition-all duration-300 group">
                <h3 className="text-xl lg:text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3 group-hover:text-accent-purple transition-colors duration-300">
                  <span className={`text-${reason.color} text-3xl`}>
                    {reason.icon}
                  </span>
                  {reason.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed text-base lg:text-lg">
                  {reason.description}
                </p>
                <ul className="text-text-secondary text-sm lg:text-base space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className={`text-${reason.color} font-bold`}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Featured Guides */}
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                  Expert Steal a Brainrot Guides
                </h2>
                <Link 
                  href="/guides"
                  className="text-accent-purple hover:text-accent-gold font-medium transition-colors duration-200 text-base lg:text-lg"
                >
                  View All →
                </Link>
              </div>
              
              <LazyLoad height={400} className="space-y-6">
                <Suspense fallback={
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-24"></div>
                    ))}
                  </div>
                }>
                  {guides.slice(0, 4).map((guide) => (
                    <Link 
                      key={guide.id}
                      href={`/guides/${guide.slug}`}
                      className="block bg-gradient-card p-6 rounded-xl border border-dark-600 shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-accent-gold/50 group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary mb-3 text-lg group-hover:text-accent-purple transition-colors duration-300">
                            {guide.title}
                          </h4>
                          <p className="text-text-secondary line-clamp-2 mb-4 leading-relaxed">
                            {guide.summary}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full font-medium">
                              {guide.difficulty || 'All Levels'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Suspense>
              </LazyLoad>
            </div>

            {/* Latest News */}
            <div>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                  Latest Steal a Brainrot News
                </h2>
                <Link 
                  href="/news"
                  className="text-accent-gold hover:text-accent-orange font-medium transition-colors duration-200 text-base lg:text-lg"
                >
                  View All →
                </Link>
              </div>
              
              <LazyLoad height={400} className="space-y-6">
                <Suspense fallback={
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-24"></div>
                    ))}
                  </div>
                }>
                  {news.slice(0, 4).map((article) => (
                    <Link 
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="block bg-gradient-card p-6 rounded-xl border border-dark-600 shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-accent-purple/50 group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary mb-3 text-lg group-hover:text-accent-gold transition-colors duration-300">
                            {article.title}
                          </h4>
                          <p className="text-text-secondary line-clamp-2 mb-4 leading-relaxed">
                            {article.summary}
                          </p>
                          <span className="text-xs text-text-muted bg-dark-700/50 px-3 py-1 rounded-full">
                            {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Suspense>
              </LazyLoad>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32">
          <div className="bg-gradient-card rounded-3xl border border-dark-600 p-8 lg:p-16">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Frequently Asked Questions About Steal a Brainrot
              </h2>
              <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Get answers to the most common questions about mastering Steal a Brainrot
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What is the best strategy for beginners in Steal a Brainrot?",
                  answer: "Start by focusing on collecting basic brainrots and learning the game mechanics. Build a secure base layout, understand the rarity system, and gradually work towards your first rare brainrot. Avoid risky PvP until you have a solid foundation."
                },
                {
                  question: "How does the Steal a Brainrot fusion system work?",
                  answer: "The Fuse Machine allows you to combine specific brainrots to create new, more powerful variants. Each fusion has different probability rates and requirements. Use our comprehensive fusion guide to understand optimal combinations and maximize your success rate."
                },
                {
                  question: "What are Steal a Brainrot rituals and how do I participate?",
                  answer: "Rituals are cooperative gameplay events requiring multiple players to work together using specific brainrots in precise formations. They unlock exclusive Brainrot God tier rewards worth millions. Check our ritual guide for detailed formation diagrams and coordination strategies."
                },
                {
                  question: "How can I protect my valuable brainrots from theft?",
                  answer: "Implement multiple security layers including strategic base layouts, decoy placement, security upgrades, and defensive alliances. Position high-value brainrots in secure locations and use maze-like pathways to slow down potential thieves."
                },
                {
                  question: "What's the fastest way to earn money in Steal a Brainrot?",
                  answer: "Focus on optimizing your brainrot income rates, completing rebirth cycles efficiently, and participating in successful rituals. Advanced players combine strategic theft, fusion investments, and market timing for maximum profitability."
                },
                {
                  question: "Are there any Steal a Brainrot codes or special events?",
                  answer: "Brazilian Spyder regularly releases update codes and hosts special events. Follow our news section for the latest codes, seasonal events, and crossover activities. Events often feature exclusive brainrots and limited-time bonuses."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-dark-800 rounded-xl border border-dark-600 p-6 lg:p-8 group hover:border-accent-purple/30 transition-colors duration-300">
                  <summary className="cursor-pointer text-lg lg:text-xl font-semibold text-text-primary group-open:text-accent-purple transition-colors duration-300 list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-accent-purple text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="mt-6 text-text-secondary text-base lg:text-lg leading-relaxed border-t border-dark-600 pt-6">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 lg:py-32 text-center">
          <div className="relative bg-gradient-to-br from-accent-purple via-accent-gold to-accent-orange rounded-3xl p-12 lg:p-20 overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900/20 via-transparent to-dark-900/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,255,0.1),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.1),transparent_50%)] animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                  <span className="text-2xl">🚀</span>
                  <span className="text-white font-semibold">Start Your Journey</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 drop-shadow-lg">
                  Ready to Master Steal a Brainrot?
                </h2>
              </div>
              
              <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-sm">
                Join thousands of players who have transformed their gameplay with our expert guides and strategies. Start your journey to Steal a Brainrot mastery today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/guides/beginner-guide"
                  className="group relative bg-dark-900 text-white border-2 border-accent-gold hover:bg-accent-gold hover:text-dark-900 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform overflow-hidden min-w-[280px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 z-10">
                    <span className="text-2xl group-hover:animate-bounce">📚</span>
                    <span>Start with Beginner Guide</span>
                  </div>
                  <div className="absolute inset-0 shadow-lg group-hover:shadow-accent-gold/50 transition-shadow duration-300"></div>
                </Link>
                
                <Link 
                  href="/guides"
                  className="group relative bg-transparent border-2 border-white hover:bg-white hover:text-dark-900 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm min-w-[280px]"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-accent-purple/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 z-10">
                    <span className="text-2xl group-hover:animate-pulse">📖</span>
                    <span>Browse All Guides</span>
                  </div>
                </Link>
              </div>
              
              {/* Additional visual elements */}
              <div className="mt-12 flex justify-center items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-accent-gold text-xl">⭐</span>
                  <span className="text-sm font-medium">Expert Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-purple text-xl">🎯</span>
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-orange text-xl">🚀</span>
                  <span className="text-sm font-medium">Fast Learning</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-purple/10 rounded-full blur-lg"></div>
          </div>
        </section>
      </div>
    </div>
  )
}