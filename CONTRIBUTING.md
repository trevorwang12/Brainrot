# Contributing to Steal a Brainrot News

Thank you for your interest in contributing to the Steal a Brainrot News website! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/brainout-news.git
   cd brainout-news
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** to `http://localhost:5000`

## 📝 Content Contributions

### Adding News Articles

1. Create a new `.md` file in `content/news/`
2. Use the following frontmatter template:
   ```yaml
   ---
   id: "unique-article-id"
   title: "Your Article Title"
   summary: "Brief description of the article"
   author: "Your Name"
   publishedAt: "2025-08-24"
   category: "Game Updates" # or "Community News", "Events"
   tags: ["tag1", "tag2", "tag3"]
   imageUrl: "/images/article-image.jpg"
   featured: false
   slug: "your-article-slug"
   ---
   ```
3. Write your content using Markdown syntax
4. Ensure images are placed in `public/images/`

### Adding Strategy Guides

1. Create a new `.md` file in `content/guides/`
2. Use the following frontmatter template:
   ```yaml
   ---
   id: "unique-guide-id"
   title: "Your Guide Title"
   summary: "Brief description of the guide"
   author: "Your Name"
   publishedAt: "2025-08-24"
   category: "Strategy Guide"
   difficulty: "beginner" # or "intermediate", "advanced"
   tags: ["strategy", "gameplay"]
   imageUrl: "/images/guide-image.jpg"
   featured: false
   slug: "your-guide-slug"
   ---
   ```

## 🔧 Code Contributions

### Code Style Guidelines

- **TypeScript**: Use strict typing, avoid `any` types
- **React**: Use functional components with hooks
- **CSS**: Use Tailwind CSS classes, avoid custom CSS when possible
- **Formatting**: Code is automatically formatted with ESLint

### File Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/             # UI components (buttons, cards, etc.)
├── lib/                # Utility functions and helpers
└── types/              # TypeScript type definitions
```

### Component Guidelines

1. **Use TypeScript interfaces** for all props
2. **Follow naming conventions**: PascalCase for components, camelCase for functions
3. **Keep components focused**: Each component should have a single responsibility
4. **Use semantic HTML**: Ensure accessibility with proper ARIA labels

### Example Component:

```typescript
interface ArticleCardProps {
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
}

export function ArticleCard({ 
  title, 
  summary, 
  author, 
  publishedAt, 
  imageUrl 
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      {/* Component content */}
    </article>
  );
}
```

## 🎨 Design Guidelines

### Color Palette

- **Primary**: Dark purple gradients for main theme
- **Article Pages**: Light cream (#fefbf3) backgrounds
- **Text**: Pure black (#000000) for maximum readability
- **Accents**: Gold (#f2bf43), Orange (#fc7c00), Purple (#9898ff)

### Typography

- **Headings**: Use semantic heading tags (h1-h6)
- **Body Text**: Maintain 1.8 line height for readability
- **Code**: Use monospace font with proper syntax highlighting

## 🧪 Testing

### Before Submitting

1. **Run the linter:**
   ```bash
   npm run lint
   ```

2. **Check TypeScript types:**
   ```bash
   npm run type-check
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Test locally:**
   - Navigate through all pages
   - Check responsive design on different screen sizes
   - Verify article content displays correctly

## 📋 Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Screenshots for UI changes
   - Reference any related issues

### Commit Message Format

Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Step-by-step instructions
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, device information
6. **Screenshots**: If applicable

## 💡 Feature Requests

For feature requests, please:

1. **Search existing issues** to avoid duplicates
2. **Describe the problem** you're trying to solve
3. **Propose a solution** if you have ideas
4. **Consider the scope** - will this benefit other users?

## 📖 Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Project-Specific Resources

- [Design System](/docs/design-system.md)
- [Content Guidelines](/docs/content-guidelines.md)
- [API Documentation](/docs/api.md)

## 🤝 Community

- Be respectful and inclusive in all interactions
- Help others learn and grow
- Focus on constructive feedback
- Celebrate contributions from all skill levels

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT).

---

**Thank you for helping make Steal a Brainrot News better for the gaming community!** 🎮