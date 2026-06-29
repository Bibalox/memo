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
