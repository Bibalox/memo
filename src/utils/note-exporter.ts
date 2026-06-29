import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import type { Category, Note } from '@types'

const sanitize = (name: string) => {
  return name
    .replace(/[<>:"/\\|?*]|\p{Cc}/gu, '')
    .trim()
}

export const exportNotes = async (categories: Category[], notes: Note[]) => {
  const zip = new JSZip()

  for (const category of categories) {
    const folder = zip.folder(category.name)

    for (const note of notes) {
      if (note.category === category.id) {
        const filename = `${sanitize(note.name || 'Untitled')}.md`
        folder?.file(filename, note.content)
      }
    }
  }

  const blob = await zip.generateAsync({
    type: 'blob',
  })

  saveAs(blob, 'Notes.zip')
}
