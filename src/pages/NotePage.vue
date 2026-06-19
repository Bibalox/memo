<script setup lang="ts">
  import { ref, toRef } from 'vue'
  import type { NoteMode } from '@types'

  import LeToolbar from '@components/LeToolbar.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeNoteViewer from '@components/LeNoteViewer.vue'

  const props = defineProps<{
    mode: NoteMode
  }>()

  const currentMode = toRef(props.mode)
  //const noteContent = ref('')
  const noteContent = ref('# Hello world!\n\nThis is a cool text\n\nThis is another cool text, which is waaaaaaaayyyyyy too long to be handled on a single line!\n- Topic 1\n\n- Topic 2\n-\n- Topic 3\n- Topic 4\n***\nAnd another paragraph\n- Topic Z\n> First line\n> Second line\n>\n> Third line\nAnd another paragraph\n---\nAnd another one!')
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