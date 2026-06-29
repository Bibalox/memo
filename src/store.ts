// ---------------------------------------------------------------------------------------------------------
// IMPORTANT NOTE!

// You have to create a .env file at the root of this project with the following variables:
// VITE_SUPABASE_URL=myURL
// VITE_SUPABASE_PUBLISHABLE_KEY=myKey

// ---------------------------------------------------------------------------------------------------------

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@utils/supabase'
import type { Note, Category } from '@types'

export const useStore = defineStore("noteStore", () => {

  const categories = ref<Category[]>()
  const notes = ref<Note[]>([])
  const favoriteNotes = ref<Note[]>([])


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


  const fetchNote = async (id: string) => {
    const { data } = await (
      supabase
        .from('notes')
        .select('*')
        .limit(1)
        .match({ id: id })
    )

    return data ? data[0] : null
  }


  const updateNote = async (id: string, newContent: string) => {
    const { data } = await (
      supabase
        .from('notes')
        .update({ content: newContent, last_update: Date.now() })
        .match({ id: id })
    )

    return data ? data[0] : null
  }


  const fetchNotes = async () => {
    const { data } = await (
      supabase
        .from('notes')
        .select('*')
        .order('name')
    )
    if (data) {
      favoriteNotes.value = data.filter((note) => note.favorite)
      notes.value = data
    }
  }


  return {
    categories,
    notes,
    favoriteNotes,
    fetchCategories,
    fetchNote,
    updateNote,
    fetchNotes,
  }

})
