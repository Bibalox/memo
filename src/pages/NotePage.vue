<script setup lang="ts">
  import { ref, toRef, onMounted } from 'vue'
  import { useStore } from '@store'
  import { useRoute } from 'vue-router'
  import type { NoteMode } from '@types'

  import LeToolbar from '@components/LeToolbar.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeNoteViewer from '@components/LeNoteViewer.vue'

  const store = useStore()
  const route = useRoute()

  const currentMode = toRef(route.params.mode as NoteMode ?? 'read')
  const noteContent = ref('')

  onMounted(async () => {
    const note = await store.fetchNote(route.params.id as string)
    noteContent.value = note.content
  })
  //const noteContent = ref('# Hello world!\n\nThis is a cool text\n\nThis is another cool text, which is waaaaaaaayyyyyy too long to be handled on a single line!\n- Topic 1\n\n- Topic 2\n-\n- Topic 3\n- Topic 4\n***\nAnd another paragraph\n- Topic Z\n> First line\n> Second line\n>\n> Third line\nAnd another paragraph\n---\nAnd another one!')
</script>

<template>
  <le-toolbar
    :mode="currentMode"
    @mode-update="(newMode: NoteMode) => currentMode = newMode"
  />
  <le-note-editor
    v-if="currentMode === 'write'"
    v-model="noteContent"
  />
  <le-note-viewer
    v-if="currentMode === 'read'"
    :content="noteContent"
  />
</template>

<style lang="scss">
</style>