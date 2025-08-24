import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { parseMarkdown } from '@/lib/markdown'

interface ReviewPageProps {
  params: {
    slug: string
  }
}

// Mock review data (in a real app, this would come from a database or CMS)
const reviews = [
  {
    id: 'latest-update-review',
    title: 'Major Update 2025: Revolutionary Features Review',
    summary: 'An in-depth analysis of the latest major update featuring new base customization, enhanced multiplayer, and performance improvements.',
    content: `
# Major Update 2025: A Game-Changing Experience

The latest major update for Steal a Brainrot has arrived, and it's nothing short of revolutionary. After spending countless hours testing every new feature, I can confidently say this update transforms the core gameplay experience in ways that will delight both newcomers and veterans.

## What's New

### Enhanced Base Customization
The new base customization system is a standout feature. Players can now:
- Design custom layouts with new building tools
- Choose from over 50 new decorative elements
- Implement advanced security systems
- Create themed bases with unique visual effects

The level of detail is impressive, allowing for truly personalized spaces that reflect individual play styles.

### Improved Multiplayer Systems
The multiplayer experience has received significant attention:
- **Servers**: More stable with 99.9% uptime
- **Cross-platform**: Seamless play between PC and mobile
- **Voice Chat**: Crystal clear communication
- **Team Features**: Enhanced coordination tools

### Performance Optimizations
Technical improvements are immediately noticeable:
- **Loading Times**: 60% faster server connections
- **Frame Rate**: Consistent 60 FPS on supported devices
- **Memory Usage**: 40% reduction in RAM consumption
- **Network**: Improved latency for international players

## Pros and Cons

### The Good
- **Intuitive Design**: New features feel natural and well-integrated
- **Performance**: Significant improvements across the board
- **Content**: Hours of new gameplay possibilities
- **Community**: Enhanced social features strengthen player connections

### Areas for Improvement
- **Learning Curve**: Veterans need time to adapt to new systems
- **Launch Bugs**: Some minor issues typical of major releases
- **Complexity**: May overwhelm casual players initially

## Verdict

This update represents the evolution of Steal a Brainrot from a simple theft game to a comprehensive social gaming platform. The developers have listened to community feedback and delivered improvements that address long-standing issues while introducing exciting new possibilities.

**Rating: 9.5/10** - An exceptional update that sets a new standard for the game.

## Recommendation

Whether you're a returning player or considering trying Steal a Brainrot for the first time, this update is the perfect entry point. The enhanced tutorials, improved performance, and expanded features create an experience that's both accessible and deeply engaging.
    `,
    rating: 9.5,
    author: 'GameReview Pro',
    publishedAt: '2025-01-24',
    category: 'Update Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['Amazing new features', 'Improved performance', 'Better customization', 'Enhanced multiplayer', 'Great community features'],
    cons: ['Learning curve for veterans', 'Some launch bugs', 'May overwhelm casual players']
  },
  {
    id: 'brainrot-fusion-review',
    title: 'Brainrot Fusion System: Complete Analysis',
    summary: 'A comprehensive review of the new fusion mechanics, including cost-benefit analysis and strategic implications.',
    content: `
# Brainrot Fusion System: A Strategic Revolution

The new Brainrot Fusion system introduces unprecedented depth to Steal a Brainrot's economy. After weeks of testing and analysis, here's everything you need to know about this game-changing feature.

## How Fusion Works

The fusion system allows players to combine multiple Brainrots to create more powerful variants:
- **Combine 2-5 Brainrots** of the same or different rarities
- **Fusion costs** scale with rarity levels
- **Success rates** vary based on combination complexity
- **Results** can exceed individual component values

### Fusion Categories

**Standard Fusion**: Combining same-rarity items
- 85% success rate
- Predictable outcomes
- Safe investment strategy

**Cross-Tier Fusion**: Mixing different rarities
- 60% success rate
- Higher reward potential
- Greater risk factor

**Experimental Fusion**: Using rare catalysts
- 35% success rate
- Unique legendary outcomes
- High-stakes gambling

## Economic Impact

The fusion system has dramatically altered the game's economy:
- **Rare Brainrots** now have additional utility beyond passive income
- **Market prices** have stabilized with increased demand
- **Investment strategies** require deeper consideration
- **Risk management** becomes crucial for progression

## Strategic Considerations

### For Beginners
- Focus on standard fusions with common/rare items
- Build experience before attempting complex combinations
- Use fusion as a way to consolidate weaker assets

### For Advanced Players
- Experiment with cross-tier combinations for maximum profit
- Time fusions during market fluctuations
- Consider fusion outcomes in overall portfolio strategy

## Verdict

The Brainrot Fusion system adds meaningful strategic depth without overwhelming the core gameplay. It rewards knowledge, planning, and calculated risk-taking while providing new progression paths for all player types.

**Rating: 8.7/10** - A well-implemented system that enhances without complicating.
    `,
    rating: 8.7,
    author: 'Strategy Expert',
    publishedAt: '2025-01-20',
    category: 'Feature Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['Strategic depth', 'Fair pricing', 'Balanced mechanics', 'Economic impact', 'Risk/reward balance'],
    cons: ['Complex for beginners', 'Limited fusion options', 'RNG dependence']
  },
  {
    id: 'multiplayer-review',
    title: 'Enhanced Multiplayer Experience Review',
    summary: 'How the new multiplayer features stack up against competition and improve the social gaming experience.',
    content: `
# Enhanced Multiplayer: Building Communities

The latest multiplayer enhancements transform Steal a Brainrot from a competitive individual experience into a thriving social ecosystem. Here's how the new features measure up.

## Key Improvements

### Server Infrastructure
- **99.7% Uptime**: Reliable connections across all regions
- **Global Servers**: Reduced latency worldwide
- **Auto-Migration**: Seamless server switching
- **Load Balancing**: Consistent performance during peak hours

### Social Features
- **Guild System**: Create and manage communities
- **Alliance Building**: Strategic partnerships
- **Event Coordination**: Group activities and competitions
- **Communication Tools**: Enhanced chat and voice systems

### Cross-Platform Play
- **Universal Compatibility**: PC, mobile, and tablet support
- **Shared Progress**: Synchronized accounts across devices
- **Input Optimization**: Tailored controls for each platform
- **Performance Scaling**: Optimal experience regardless of device

## Community Impact

The social features have created a more welcoming environment:
- **Mentorship Programs**: Veterans helping newcomers
- **Collaborative Events**: Server-wide challenges
- **Knowledge Sharing**: Strategy discussions and guides
- **Friendship Building**: Long-term relationships beyond the game

## Technical Performance

Network improvements are immediately noticeable:
- **Reduced Lag**: Sub-50ms response times
- **Stable Connections**: Fewer disconnections
- **Smooth Gameplay**: Consistent frame rates
- **Quick Matching**: Faster server joining

## Areas for Growth

While impressive, some aspects need refinement:
- **Voice Quality**: Occasional audio compression issues
- **Server Capacity**: Peak hour limitations
- **Moderation Tools**: Need stronger anti-grief measures

## Final Thoughts

The multiplayer enhancements succeed in creating a more connected, engaging experience. The technical improvements provide a solid foundation, while the social features encourage community building and long-term engagement.

**Rating: 9.2/10** - Excellent implementation with room for polish.
    `,
    rating: 9.2,
    author: 'Community Reviewer',
    publishedAt: '2025-01-18',
    category: 'Feature Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['Better connectivity', 'New social features', 'Cross-platform play', 'Community building', 'Technical stability'],
    cons: ['Server stability issues', 'Voice chat quality', 'Moderation needs improvement']
  },
  {
    id: 'ui-overhaul-review',
    title: 'User Interface Overhaul: Design Review',
    summary: 'A detailed look at the redesigned user interface, accessibility improvements, and user experience enhancements.',
    content: `
# UI Overhaul: Form Meets Function

The complete user interface redesign brings Steal a Brainrot into the modern era of gaming UX. After extensive testing across multiple devices, here's our comprehensive analysis.

## Design Philosophy

The new interface embraces minimalist design principles:
- **Clean Lines**: Reduced visual clutter
- **Intuitive Navigation**: Logical menu structures
- **Consistent Theming**: Unified visual language
- **Responsive Design**: Adapts to any screen size

## Key Improvements

### Navigation System
- **Streamlined Menus**: 40% fewer clicks to reach common features
- **Search Functionality**: Find items and features instantly
- **Breadcrumb Navigation**: Always know your location
- **Quick Actions**: One-touch access to frequent tasks

### Accessibility Features
- **High Contrast Mode**: Improved visibility for all users
- **Text Scaling**: Adjustable font sizes
- **Color Blind Support**: Alternative color schemes
- **Screen Reader Compatibility**: Full accessibility compliance

### Mobile Optimization
- **Touch-First Design**: Finger-friendly interface elements
- **Gesture Support**: Swipe and tap interactions
- **Adaptive Layouts**: Optimized for all screen sizes
- **Performance**: Smooth animations on lower-end devices

## User Experience Impact

The redesign significantly improves daily gameplay:
- **Learning Curve**: New players adapt 60% faster
- **Efficiency**: Veterans complete tasks more quickly
- **Satisfaction**: Higher user retention rates
- **Engagement**: Increased session lengths

## Visual Design

### Color Scheme
The updated palette creates better visual hierarchy:
- **Primary Colors**: Bold, distinctive branding
- **Secondary Palette**: Subtle supporting elements
- **Status Indicators**: Clear, universally understood symbols
- **Dark Mode**: Comfortable low-light gaming

### Typography
Text improvements enhance readability:
- **Font Selection**: Modern, highly legible typefaces
- **Hierarchy**: Clear distinction between content levels
- **Spacing**: Improved breathing room
- **Consistency**: Unified text treatments

## Technical Implementation

### Performance
- **Load Times**: 50% faster interface rendering
- **Memory Usage**: 30% reduction in UI overhead
- **Battery Life**: Improved efficiency on mobile devices
- **Compatibility**: Supports older device models

### Customization
- **Themes**: Multiple visual options
- **Layout Options**: Personalized arrangements
- **Widget System**: Modular interface elements
- **Shortcut Configuration**: User-defined quick actions

## Areas for Polish

While largely successful, some aspects need refinement:
- **Adjustment Period**: Learning new muscle memory takes time
- **Missing Shortcuts**: Some power-user features were simplified
- **Animation Speed**: Some users prefer faster transitions

## Conclusion

The UI overhaul successfully modernizes Steal a Brainrot's interface while maintaining the game's unique character. The focus on accessibility and user experience creates a more welcoming environment for all players.

**Rating: 8.9/10** - A thoughtful redesign that prioritizes user needs.
    `,
    rating: 8.9,
    author: 'UX Designer',
    publishedAt: '2025-01-15',
    category: 'Design Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['Clean design', 'Better accessibility', 'Intuitive navigation', 'Mobile optimization', 'Performance improvements'],
    cons: ['Adjustment period', 'Missing some shortcuts', 'Animation preferences']
  },
  {
    id: 'economy-balance-review',
    title: 'Economic Balance Changes Review',
    summary: 'Analysis of the recent economy adjustments and their impact on gameplay progression and player satisfaction.',
    content: `
# Economic Balance: Finding Equilibrium

The latest economic balance changes address long-standing progression issues in Steal a Brainrot. After analyzing market data and player feedback, here's how these adjustments impact the game.

## Balance Changes Overview

### Pricing Adjustments
- **Early Game**: Reduced costs for basic Brainrots by 25%
- **Mid Game**: Balanced progression curve for Rare/Epic tiers
- **End Game**: Slight increase in Secret tier requirements
- **Lucky Blocks**: Adjusted probability distributions

### Income Rebalancing
- **Passive Generation**: More consistent across all rarities
- **Theft Rewards**: Increased incentives for active play
- **Event Bonuses**: Enhanced special event multipliers
- **Daily Rewards**: Improved login incentives

## Impact Analysis

### New Player Experience
The changes significantly improve early game progression:
- **Faster Start**: Reach first milestone 40% quicker
- **Reduced Grind**: Less repetitive gameplay in initial hours
- **Clear Goals**: Better-defined progression targets
- **Motivation**: Frequent meaningful upgrades

### Veteran Players
Long-term players see mixed but generally positive effects:
- **End Game Goals**: New aspirational targets
- **Collection Value**: Existing assets maintain worth
- **Strategy Depth**: More meaningful economic decisions
- **Competition**: Balanced playing field for all

### Market Dynamics
The economy shows healthy adjustments:
- **Price Stability**: Reduced extreme fluctuations
- **Fair Trading**: More equitable exchange rates
- **Inflation Control**: Managed currency circulation
- **Opportunity Equality**: Merit-based advancement

## Specific Changes

### Brainrot Pricing
- **Common Tier**: $100-$10K (reduced from $500-$50K)
- **Rare Tier**: $10K-$500K (maintained current range)
- **Epic Tier**: $500K-$25M (slight increase)
- **Legendary Tier**: $25M-$100M (maintained)
- **Mythic Tier**: $100M-$750M (maintained)
- **Secret Tier**: $750M+ (slight increase in requirements)

### Income Generation
- **Common**: $1-$500/second (improved scaling)
- **Rare**: $500-$5K/second (balanced curve)
- **Epic**: $5K-$50K/second (enhanced mid-game)
- **Legendary**: $50K-$500K/second (maintained)
- **Mythic**: $500K-$5M/second (slight improvement)
- **Secret**: $5M-$30M/second (maintained premium rates)

## Community Response

Player feedback has been largely positive:
- **85% Approval**: General satisfaction with changes
- **Progression Satisfaction**: Improved pacing feedback
- **Fairness**: Perceived equity improvements
- **Long-term Engagement**: Increased retention metrics

## Remaining Concerns

Some issues still need attention:
- **Veteran Adjustment**: Adaptation period for experienced players
- **Market Volatility**: Short-term price fluctuations
- **Regional Differences**: Varying impacts across servers

## Recommendations

For optimal experience with the new economy:
- **New Players**: Focus on steady progression, avoid risky investments
- **Veterans**: Reassess strategies, consider new opportunities
- **Traders**: Monitor market trends, adjust positions gradually

## Conclusion

The economic balance changes successfully address core progression issues while maintaining the game's competitive nature. The adjustments create a more accessible and fair environment without compromising the challenge that makes Steal a Brainrot engaging.

**Rating: 7.8/10** - Positive changes with room for fine-tuning.
    `,
    rating: 7.8,
    author: 'Economy Analyst',
    publishedAt: '2025-01-12',
    category: 'Balance Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['More balanced progression', 'Fairer pricing', 'Reduced grind', 'Better new player experience', 'Market stability'],
    cons: ['Veteran player concerns', 'Market adjustments needed', 'Short-term volatility']
  },
  {
    id: 'mobile-optimization-review',
    title: 'Mobile Optimization: Performance Review',
    summary: 'How well does Steal a Brainrot perform on mobile devices after the latest optimization update?',
    content: `
# Mobile Optimization: Gaming On-The-Go

The mobile optimization update brings console-quality performance to smartphones and tablets. After extensive testing across 15 different devices, here's how Steal a Brainrot performs on mobile platforms.

## Performance Improvements

### Frame Rate Optimization
- **Consistent 60 FPS**: Maintained across all supported devices
- **Dynamic Scaling**: Automatic quality adjustments for older hardware
- **Battery Optimization**: 35% improvement in power efficiency
- **Thermal Management**: Better heat distribution and cooling

### Loading Performance
- **App Launch**: 50% faster startup times
- **Server Connection**: Reduced join times by 40%
- **Asset Loading**: Streaming system reduces wait times
- **Memory Management**: Efficient resource utilization

### Network Optimization
- **Data Usage**: 30% reduction in bandwidth consumption
- **Connection Stability**: Improved handling of network switches
- **Offline Capabilities**: Enhanced local caching
- **Low-Signal Performance**: Better gameplay on weak connections

## Device Compatibility

### High-End Devices (Flagship Phones)
- **Performance**: Maximum settings, 60 FPS constant
- **Features**: All gameplay elements available
- **Graphics**: Enhanced visual effects and animations
- **Experience**: Comparable to PC performance

### Mid-Range Devices (2-3 Years Old)
- **Performance**: High settings, stable 45-60 FPS
- **Features**: Full functionality with minor limitations
- **Graphics**: Good quality with optimized effects
- **Experience**: Smooth, enjoyable gameplay

### Budget Devices (Entry Level)
- **Performance**: Medium settings, consistent 30 FPS
- **Features**: Core gameplay fully accessible
- **Graphics**: Simplified but clear visuals
- **Experience**: Playable without frustration

## Control Interface

### Touch Controls
- **Responsive**: Sub-10ms input latency
- **Intuitive**: Natural gesture recognition
- **Customizable**: Adjustable button layouts
- **Accessible**: Support for various hand sizes and abilities

### Gesture System
- **Swipe Navigation**: Fluid menu transitions
- **Pinch-to-Zoom**: Precise camera control
- **Tap Interactions**: Clear visual feedback
- **Multi-touch**: Advanced manipulation capabilities

## User Experience

### Interface Adaptation
- **Screen Sizes**: Optimized for 4.5" to 12.9" displays
- **Orientation**: Full landscape and portrait support
- **One-Hand Mode**: Comfortable single-hand operation
- **Split Screen**: Multitasking compatibility

### Quality of Life
- **Quick Actions**: Streamlined mobile workflows
- **Notification System**: Intelligent alert management
- **Background Play**: Limited functionality when minimized
- **Auto-Save**: Frequent progress preservation

## Battery Life Impact

### Optimization Results
- **Standard Play**: 4-6 hours of continuous gameplay
- **Power Saver**: Up to 8 hours with reduced settings
- **Background**: Minimal drain during idle periods
- **Charging**: Compatible with fast-charging protocols

### Heat Management
- **Temperature Control**: Effective thermal throttling
- **Performance**: Maintains stability under load
- **Comfort**: Prevents uncomfortable device heating
- **Longevity**: Protects device hardware health

## Comparison with PC Version

### Feature Parity
- **Gameplay**: 98% feature compatibility
- **Graphics**: Adapted but equivalent quality
- **Performance**: Smooth on appropriate hardware
- **Social**: Full multiplayer and community features

### Mobile-Specific Advantages
- **Portability**: Gaming anywhere, anytime
- **Touch Interface**: More intuitive for some actions
- **Notifications**: Better integration with device features
- **Quick Sessions**: Perfect for shorter play periods

## Areas for Improvement

While impressive, some limitations remain:
- **Small Screen**: UI density challenges on phones
- **Heat Generation**: Extended play can warm devices
- **Precision**: Fine motor tasks prefer larger screens

## Verdict

The mobile optimization successfully brings the full Steal a Brainrot experience to mobile devices without significant compromises. Performance improvements make the game accessible to a broader range of hardware while maintaining the quality that defines the experience.

**Rating: 8.5/10** - Excellent optimization with minor limitations.

## Recommendation

Mobile Steal a Brainrot is now a legitimate alternative to PC play, especially for casual sessions and on-the-go gaming. The optimization work ensures that players can enjoy the full experience regardless of their preferred platform.
    `,
    rating: 8.5,
    author: 'Mobile Gaming Expert',
    publishedAt: '2025-01-10',
    category: 'Performance Review',
    imageUrl: '/images/placeholder.svg',
    pros: ['Smooth performance', 'Better battery life', 'Touch controls', 'Device compatibility', 'Feature parity'],
    cons: ['Small screen limitations', 'Heat generation', 'Precision challenges']
  }
];

function getReviewBySlug(slug: string) {
  return reviews.find(review => review.id === slug);
}

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.id,
  }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = getReviewBySlug(params.slug);
  
  if (!review) {
    return {
      title: 'Review Not Found',
    };
  }

  return {
    title: `${review.title} | Steal a Brainrot Reviews`,
    description: review.summary,
    openGraph: {
      title: review.title,
      description: review.summary,
      type: 'article',
      publishedTime: review.publishedAt,
      authors: [review.author],
      images: review.imageUrl ? [review.imageUrl] : undefined,
    },
  };
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const review = getReviewBySlug(params.slug);

  if (!review) {
    notFound();
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
              <Link href="/reviews" className="hover:text-purple-700 transition-colors">
                Reviews
              </Link>
            </li>
            <li>/</li>
            <li className="truncate" style={{ color: '#4a4037' }}>{review.title}</li>
          </ol>
        </nav>

        <article className="rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: '#fffef9', border: '1px solid #f0ebdc' }}>
          {/* Review Header */}
          <header className="px-8 pt-8 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#e8f4fd', color: '#1e40af' }}>
                {review.category}
              </span>
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-800">{review.rating}/10</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>
              {review.title}
            </h1>

            <div className="flex items-center justify-between text-sm mb-6" style={{ color: '#666666' }}>
              <div className="flex items-center space-x-4">
                <span>By {review.author}</span>
                <span>Published: {new Date(review.publishedAt).toLocaleDateString('en-US')}</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: '#333333' }}>
              {review.summary}
            </p>
          </header>

          {/* Featured Image */}
          {review.imageUrl && (
            <div className="px-8 pb-6">
              <Image
                src={review.imageUrl}
                alt={review.title}
                width={800}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          )}

          {/* Pros and Cons */}
          <div className="px-8 pb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="text-green-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="text-red-700 flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="px-8 pb-8">
            <div 
              className="prose prose-lg max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(review.content) }}
            />
          </div>

          {/* Final Rating */}
          <div className="px-8 pb-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Final Rating</h3>
              <div className="flex justify-center items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-3xl font-bold text-gray-800">{review.rating}/10</span>
              </div>
              <p className="text-gray-600">
                {review.rating >= 9 ? 'Exceptional' : 
                 review.rating >= 8 ? 'Excellent' : 
                 review.rating >= 7 ? 'Good' : 
                 review.rating >= 6 ? 'Fair' : 'Needs Improvement'}
              </p>
            </div>
          </div>
        </article>

        {/* Back to Reviews */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/reviews"
            className="inline-flex items-center font-medium transition-colors back-link"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Reviews
          </Link>
          
          <div className="flex space-x-4">
            <Link
              href="/guides"
              className="inline-flex items-center font-medium transition-colors"
              style={{ color: '#6366f1' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Browse Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}