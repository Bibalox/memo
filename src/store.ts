// ---------------------------------------------------------------------------------------------------------
// IMPORTANT NOTE!

// You have to create a .env file at the root of this project with the following variables:
// VITE_SUPABASE_URL=myURL
// VITE_SUPABASE_PUBLISHABLE_KEY=myKey

// ---------------------------------------------------------------------------------------------------------

import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getLocalCategories, getLocalNotes, saveLocalCategories, saveLocalNotes } from '@utils/indexed-db-helper'
import { supabase } from '@utils/supabase-helper'
import type { Note, Category } from '@types'

export const useStore = defineStore("noteStore", () => {

  const state = reactive({
    connected: false,
    loaded: false,
    online: navigator.onLine
  })

  const categories = ref<Category[]>([])
  const notes = ref<Note[]>([])

  const fetchCategories = async () => {
    if (state.online) {
      const { data } = await (
        supabase
          .from('categories')
          .select('*')
          .order('position')
      )
      if (!data) return

      categories.value = data

      await saveLocalCategories(data as Category[])
    } else {
      const array = await getLocalCategories()
      categories.value = array.sort((a, b) => {
        return (a.position > b.position) ? 1 : -1
      })
    }
  }


  const fetchNotes = async () => {
    if (state.online) {
      const { data } = await supabase
        .from('notes')
        .select('*')
        .order('name')

      if (!data) return

      notes.value = data

      await saveLocalNotes(data as Note[])
    } else {
      const array = await getLocalNotes()
      notes.value = array.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1
      })
    }
  }


  const fetchData = async () => {
    await fetchCategories()
    await fetchNotes()
    state.loaded = true
  }


  const getNote = (id: string) => {
    return notes.value.find(note => note.id.toString() === id)
  }

  const updateNote = async (id: string) => {
    const note = getNote(id)

    const { error } = await Promise.race([
      supabase
        .from('notes')
        .update({
          content: note?.content,
          last_update: Date.now(),
        })
        .match({ id }),

      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 1000)
      ),
    ])

    if (error) throw error
  }

  const watchOnlineStatus = () => {
    window.addEventListener('online', () => {
      state.online = true
    })

    window.addEventListener('offline', () => {
      state.online = false
    })
  }

  return {
    state,
    categories,
    notes,
    fetchData,
    getNote,
    updateNote,
    watchOnlineStatus
  }
})
