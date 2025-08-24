import { marked } from 'marked'

// Configure marked for better HTML output
marked.setOptions({
  gfm: true,
  breaks: true
})

export function parseMarkdown(content: string): string {
  return marked(content) as string
}