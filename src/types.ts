export type Mode = 'write' | 'read'

export type Note = {
  id: number
  last_update?: number
  category: string
  favorite?: boolean
  name: string
  content: string
}

export type Category = {
  id: string
  name: string
  position: number
}

export type TextBlock =
  | {
    type: 'title'
    content: string
  }
  | {
    type: 'paragraph'
    content: string
    parts: InlineText[]
  }
  | {
    type: 'unordered-list'
    items: {
      raw: string
      parts: InlineText[]
    }[]
  }
  | {
    type: 'ordered-list'
    items: {
      raw: string
      parts: InlineText[]
    }[]
  }
  | {
    type: 'blockquote'
    lines: string[]
  }
  | {
    type: 'divider'
  }

export type InlineText =
  | { type: 'text'; content: string }
  | { type: 'link'; content: string }
