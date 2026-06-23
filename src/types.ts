export type NoteMode = 'write' | 'read'

export type Note = {
  id: number
  lastUpdate?: Date
  category: string
  name: string
  content: string
}

export type Category = {
  id: string
  name: string
  position: number
}