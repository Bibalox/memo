import { openDB } from 'idb'
import type { Category, Note } from '@types'

export const database = openDB('memo', 2, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('categories')) {
      db.createObjectStore('categories', {
        keyPath: 'id',
      })
    }

    if (!db.objectStoreNames.contains('notes')) {
      db.createObjectStore('notes', {
        keyPath: 'id',
      })
    }
  },
})

export async function getLocalCategories() {
  return (await database).getAll('categories')
}

export async function getLocalNotes() {
  return (await database).getAll('notes')
}

export async function saveLocalCategories(categories: Category[]) {
  const db = await database

  const tx = db.transaction('categories', 'readwrite')

  await tx.store.clear()

  for (const category of categories) {
    await tx.store.put(category)
  }

  await tx.done
}

export async function saveLocalNotes(notes: Note[]) {
  const db = await database

  const tx = db.transaction('notes', 'readwrite')

  await tx.store.clear()

  for (const note of notes) {
    await tx.store.put(note)
  }

  await tx.done
}
