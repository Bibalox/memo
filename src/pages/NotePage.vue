<script setup lang="ts">
  import { reactive, toRef, onMounted } from 'vue'
  import { useStore } from '@store'
  import { useRoute } from 'vue-router'
  import type { NoteMode } from '@types'

  import LeToolbar from '@components/LeToolbar.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeNoteViewer from '@components/LeNoteViewer.vue'

  const store = useStore()
  const route = useRoute()

  const currentMode = toRef(route.params.mode as NoteMode ?? 'read')
  const currentNote = reactive({
    id: undefined,
    content: ''
  })

  onMounted(async () => {
    const note = await store.fetchNote(route.params.id as string)
    currentNote.content = note.content
    currentNote.id = note.id 
  })

  const toto = (newMode: NoteMode) => {
    currentMode.value = newMode
    if (currentNote.id && currentNote.content !== '') store.updateNote(currentNote.id, currentNote.content)
  }
</script>

<template>
  <le-toolbar
    :mode="currentMode"
    @mode-update="(newMode: NoteMode) => toto(newMode)"
  />
  <le-note-editor
    v-if="currentMode === 'write'"
    v-model="currentNote.content"
  />
  <le-note-viewer
    v-if="currentMode === 'read'"
    :content="currentNote.content"
  />
</template>

<style lang="scss">
</style>