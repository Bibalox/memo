export type NoteMode = 'write' | 'read'

export type Note = {
  id: string
  last_update?: number
  category: string
  name: string
  content: string
}

export type Category = {
  id: string
  name: string
  position: number
}