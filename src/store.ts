// ---------------------------------------------------------------------------------------------------------
// IMPORTANT NOTE!

// Think about creating a .env file at the root of this project with the following variables:
// VITE_SUPABASE_URL
// VITE_SUPABASE_PUBLISHABLE_KEY

// ---------------------------------------------------------------------------------------------------------

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@utils/supabase'

import type { Note } from '@types'

export const useStore = defineStore("noteStore", () => {
  const notes = ref<Note[]>()
  const favoriteNotes = ref<Note[]>()

  const fetchNotes = async (category: string) => {
    const { data } = await supabase.from('notes').select('*').eq('category', category)
    if (data) notes.value = data
  }

  const fetchFavoriteNotes = async () => {
    const { data } = await supabase.from('notes').select('*').eq('favorite', true)
    if (data) favoriteNotes.value = data
  }

  return {
    notes,
    favoriteNotes,
    fetchNotes,
    fetchFavoriteNotes,
  }
})