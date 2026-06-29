<script setup lang="ts">
  import { computed, toRef, onMounted } from 'vue'
  import { useStore } from '@store'
  import { useRoute } from 'vue-router'
  import type { Mode } from '@types'

  import LeToolbar from '@components/LeToolbar.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeNoteViewer from '@components/LeNoteViewer.vue'

  const store = useStore()
  const route = useRoute()

  const mode = toRef(route.params.mode as Mode ?? 'read')

  onMounted(async () => {
    if (!store.loaded) await store.fetchData()
  })

  const note = computed(() => {
    return store.getNote(route.params.id as string)
  })

  // watch(
  //   () => note.value?.content,
  //   () => console.log(store.getNote(route.params.id as string), store.notes)
  // )
</script>

<template>
  <le-toolbar
    :mode="mode"
    @mode-update="(newMode: Mode) => mode = newMode"
  />
  <le-note-editor
    v-if="mode === 'write' && note"
    v-model="note.content"
  />
  <le-note-viewer
    v-if="mode === 'read' && note"
    :content="note.content"
  />
</template>

<style lang="scss">
</style>
