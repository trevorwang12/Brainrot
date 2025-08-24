import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NewsArticle, Guide } from '@/types/content'

const contentDirectory = path.join(process.cwd(), 'content')

export function getNewsArticles(): NewsArticle[] {
  const newsDirectory = path.join(contentDirectory, 'news')
  
  if (!fs.existsSync(newsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(newsDirectory)
  
  const articles = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(newsDirectory, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: data.id || name.replace('.md', ''),
        title: data.title,
        summary: data.summary,
        content,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        category: data.category,
        tags: data.tags || [],
        imageUrl: data.imageUrl,
        featured: data.featured || false,
        slug: data.slug || name.replace('.md', '')
      } as NewsArticle
    })
  
  return articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getGuides(): Guide[] {
  const guidesDirectory = path.join(contentDirectory, 'guides')
  
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(guidesDirectory)
  
  const guides = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(guidesDirectory, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: data.id || name.replace('.md', ''),
        title: data.title,
        summary: data.summary,
        content,
        author: data.author,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        category: data.category,
        tags: data.tags || [],
        imageUrl: data.imageUrl,
        difficulty: data.difficulty || 'beginner',
        featured: data.featured || false,
        slug: data.slug || name.replace('.md', '')
      } as Guide
    })
  
  return guides.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getNewsArticleBySlug(slug: string): NewsArticle | null {
  const articles = getNewsArticles()
  return articles.find(article => article.slug === slug) || null
}

export function getGuideBySlug(slug: string): Guide | null {
  const guides = getGuides()
  return guides.find(guide => guide.slug === slug) || null
}