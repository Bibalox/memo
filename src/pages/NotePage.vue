<script setup lang="ts">
  import { ref, toRef } from 'vue'
  import type { NoteMode } from '@types'

  import LeNoteToolbar from '@components/note/LeNoteToolbar.vue'
  import LeNoteEditor from '@components/note/LeNoteEditor.vue'

  const props = defineProps<{
    mode: NoteMode
  }>()

  const mode = toRef(props.mode)
  const noteContent = ref('')
</script>

<template>
  <le-note-toolbar
    :mode="mode"
    @mode-update="(newMode: NoteMode) => mode = newMode"
  />
  <le-note-editor
    v-if="mode === 'write'"
    v-model="noteContent"
  />
</template>

<style lang="scss">
</style>