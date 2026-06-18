<script setup lang="ts">
  import { toRef } from 'vue'
  import type { NoteMode } from '@types'

  import LeNoteToolbar from '@components/note/LeNoteToolbar.vue'
  import LeNoteEditor from '@components/note/LeNoteEditor.vue'

  const props = defineProps<{
    mode: NoteMode
  }>()

  const mode = toRef(props.mode)
</script>

<template>
  <le-note-toolbar
    :mode="mode"
    @mode-update="(newMode: NoteMode) => mode = newMode"
  />
  <le-note-editor />
</template>

<style lang="scss">
</style>