import JSZip from 'jszip'
import { useStore } from '@store'
import { saveAs } from 'file-saver'

const store = useStore()

const sanitize = (name: string) => {
  return name
    .replace(/[<>:"/\\|?*]|\p{Cc}/gu, '')
    .trim()
}

export const exportNotes = async () => {
  const zip = new JSZip()

  for (const category of store.categories) {
    const folder = zip.folder(category.name)

    for (const note of store.notes) {
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
