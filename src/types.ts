export type NoteMode = 'write' | 'read'

export type Note = {
  id: number
  lastUpdate?: Date
  name: string
  category: string
  favorite: boolean
  content: string
}