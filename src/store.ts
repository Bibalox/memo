// ---------------------------------------------------------------------------------------------------------
// IMPORTANT NOTE!

// You have to create a .env file at the root of this project with the following variables:
// VITE_SUPABASE_URL=myURL
// VITE_SUPABASE_PUBLISHABLE_KEY=myKey

// ---------------------------------------------------------------------------------------------------------

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@utils/supabase-config'
import type { Note, Category } from '@types'

export const useStore = defineStore("noteStore", () => {

  const categories = ref<Category[]>([])
  const notes = ref<Note[]>([])
  const loaded = ref(false)


  const fetchCategories = async () => {
    const { data } = await (
      supabase
        .from('categories')
        .select('*')
        .order('position')
    )
    if (data) {
      categories.value = data
    }
  }


  const fetchNotes = async () => {
    const { data } = await (
      supabase
        .from('notes')
        .select('*')
        .order('name')
    )
    if (data) {
      notes.value = data
    }
  }


  const fetchData = async () => {
    await fetchCategories()
    await fetchNotes()
    loaded.value = true
  }


  const getNote = (id: string) => {
    return notes.value.find(note => note.id.toString() === id)
  }


  const updateNote = async (id: string) => {
    const note: Note | undefined = getNote(id)

    await (
      supabase
        .from('notes')
        .update({ content: note?.content, last_update: Date.now() })
        .match({ id: id })
    )
  }


  return {
    categories,
    notes,
    loaded,
    fetchData,
    getNote,
    updateNote
  }
})
