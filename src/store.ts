// ---------------------------------------------------------------------------------------------------------
// IMPORTANT NOTE!

// Think about creating a .env file at the root of this project with the following variables:
// VITE_SUPABASE_URL
// VITE_SUPABASE_PUBLISHABLE_KEY

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
    notes,
    favoriteNotes,
    categories,
    fetchCategories,
    fetchNotes,
  }
})