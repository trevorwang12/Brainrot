export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  imageUrl?: string
  featured: boolean
  slug: string
}

export interface Guide {
  id: string
  title: string
  summary: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  imageUrl?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  featured: boolean
  slug: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}