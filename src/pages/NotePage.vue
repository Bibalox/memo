<script setup lang="ts">
  import { ref, toRef, onMounted, computed, watch, onBeforeUnmount } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '@store'
  import type { Mode } from '@types'

  import LeToolbar from '@components/LeToolbar.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeNoteViewer from '@components/LeNoteViewer.vue'

  const route = useRoute()
  const store = useStore()

  let timeout: ReturnType<typeof setTimeout> | null = null
  const mode = toRef(route.params.mode as Mode ?? 'read')
  const note = computed(() => {
    return store.getNote(route.params.id as string)
  })
  const mustSync = ref(false)

  watch(
    () => note.value?.content,
    () => {
      mustSync.value = true
      if (timeout) clearTimeout(timeout)

      timeout = setTimeout(() => {
        store.updateNote(route.params.id as string)
        mustSync.value = false
      }, 500)
    }
  )

  onMounted(async () => {
    if (!store.loaded) await store.fetchData()
  })

  onBeforeUnmount(() => {
    if (timeout) clearTimeout(timeout)
  })
</script>

<template>
  <le-toolbar
    v-show="note"
    :mode="mode"
    :must-sync="mustSync"
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
