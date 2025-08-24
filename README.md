# Steal a Brainrot News Website

A modern gaming news website built with Next.js, featuring comprehensive coverage of the Steal a Brainrot gaming phenomenon.

## 🎮 About

This website provides the latest news, in-depth guides, and strategic content for the Steal a Brainrot gaming community. With over 15.2 billion player interactions analyzed, we deliver expert insights and comprehensive gameplay strategies.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 with custom design system
- **Content:** Markdown with gray-matter
- **Search:** Full-text search with API routes
- **Architecture:** Static Site Generation (SSG) for optimal performance

## 🎨 Design System

### Color Palette
- **Primary Theme:** Dark gradient backgrounds inspired by Mobalytics
- **Article Pages:** Light cream backgrounds (#fefbf3) for optimal readability
- **Text:** Pure black (#000000) for maximum contrast
- **Accents:** Gold (#f2bf43), Orange (#fc7c00), Purple (#9898ff), Green (#16b474)

### Typography
- **Primary Font:** Geist Sans
- **Monospace:** Geist Mono
- **Article Content:** Optimized prose styling with high contrast

## 📁 Project Structure

```
brainout-news/
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
│
├── public/
│   ├── images/          # Static images
│   └── icons/           # SVG icons
│
├── content/
│   ├── news/            # News articles (Markdown)
│   └── guides/          # Strategy guides (Markdown)
│
└── src/
    ├── app/             # Next.js App Router pages
    │   ├── globals.css  # Global styles
    │   ├── layout.tsx   # Root layout
    │   ├── page.tsx     # Homepage
    │   ├── news/        # News pages
    │   ├── guides/      # Guide pages
    │   ├── search/      # Search functionality
    │   └── api/         # API routes
    │
    ├── components/      # Reusable components
    │   ├── layout/      # Layout components
    │   └── ui/          # UI components
    │
    ├── lib/             # Utilities and helpers
    │   ├── content.ts   # Content management
    │   └── markdown.ts  # Markdown processing
    │
    └── types/           # TypeScript definitions
        └── content.ts   # Content type definitions
```

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd brainout-news
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:6666

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Content Management

### Adding News Articles

1. Create a new `.md` file in `content/news/`
2. Include frontmatter with metadata:
   ```yaml
   ---
   id: "unique-id"
   title: "Article Title"
   summary: "Brief description"
   author: "Author Name"
   publishedAt: "2025-08-23"
   category: "News Category"
   tags: ["tag1", "tag2"]
   imageUrl: "/images/placeholder.svg"
   featured: false
   slug: "article-slug"
   ---
   ```
3. Write content using Markdown syntax

### Adding Strategy Guides

1. Create a new `.md` file in `content/guides/`
2. Include frontmatter with guide-specific metadata:
   ```yaml
   ---
   id: "guide-id"
   title: "Guide Title"
   summary: "Guide description"
   author: "Author Name"
   publishedAt: "2025-08-23"
   category: "Strategy Guide"
   difficulty: "beginner" | "intermediate" | "advanced"
   tags: ["strategy", "gameplay"]
   imageUrl: "/images/placeholder.svg"
   featured: false
   slug: "guide-slug"
   ---
   ```

## 🎯 Features

### ✅ Completed Features
- Modern responsive design with dark/light themes
- Comprehensive content management system
- Full-text search functionality
- Static site generation for optimal performance
- SEO-optimized article pages
- Mobile-friendly navigation
- Tailwind CSS design system
- TypeScript for type safety

### 📋 Pages
- **Homepage:** Featured content and latest updates
- **News Section:** Latest gaming news and updates
- **Guides Section:** Strategic guides and tutorials  
- **Search:** Full-text content search
- **Static Pages:** About, Contact, Privacy Policy, Terms

### 🔍 Content Categories
- **News:** Game updates, events, community news
- **Strategy Guides:** Beginner to advanced gameplay strategies
- **Economic Guides:** Brainrot hierarchy and investment strategies
- **Technical Guides:** Advanced mechanics and optimization

## 🎨 Styling Guidelines

### CSS Organization
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS variables for consistent theming
- Responsive design with mobile-first approach

### Color Usage
```css
/* Article pages - Light theme */
.article-content {
  background: #fefbf3;  /* Light cream */
  color: #000000;       /* Pure black text */
}

/* Main site - Dark theme */
.main-content {
  background: linear-gradient(135deg, #2a1f52, #1a1635, #100f2b);
  color: #ffffff;
}
```

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance

- **Build Size:** ~129kB First Load JS
- **Static Generation:** 30 static pages
- **Lighthouse Score:** Optimized for performance and accessibility
- **Image Optimization:** Next.js automatic image optimization

## 🚀 Deployment

### Docker Deployment (Recommended)

```bash
# Development
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml up -d
```

**Access URLs:**
- Development: http://localhost:6666
- Production HTTP: http://localhost:6666
- Production HTTPS: https://localhost:6667

### Other Platforms
This project is also optimized for deployment on:
- **Vercel**
- **Netlify** 
- **GitHub Pages**
- Any static hosting service

## 🔗 SEO Features

- Automatic sitemap generation
- Open Graph meta tags
- Structured data for articles
- Semantic HTML structure
- Mobile-responsive design
- Fast loading times with SSG

## 📈 Analytics & Monitoring

The website includes comprehensive content covering:
- 15.2+ billion player interactions analyzed
- Complete gameplay strategies and guides
- Economic analysis and investment strategies
- Community event coverage and updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is developed for the Steal a Brainrot gaming community.

---

**Built with ❤️ for the Steal a Brainrot Community**

*Last updated: August 24, 2025*