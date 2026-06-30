<script setup lang="ts">
  import { reactive, toRef, onMounted, computed, watch, onBeforeUnmount } from 'vue'
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
  const state = reactive({
    mustSync: false,
    onError: false
  })

  const syncNote = () => {
    state.mustSync = true
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(async () => {
      try {
        await store.updateNote(route.params.id as string)
        state.onError = false
        state.mustSync = false
      } catch {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
        state.onError = true
        syncNote()
      }
    }, 500)
  }

  watch(() => note.value?.content, () => syncNote())
  onMounted(async () => { if (!store.state.loaded) await store.fetchData() })
  onBeforeUnmount(() => { if (timeout) clearTimeout(timeout) })
</script>

<template>
  <le-toolbar
    v-show="note"
    :mode="mode"
    :must-sync="state.mustSync"
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
  <span
    v-if="state.onError"
    class="le-overlay label"
    v-text="'Hors connexion'"
  />
</template>

<style lang="scss">
  .le-overlay {
    align-items: center;
    background-color: var(--overlay-base);
    color: var(--foreground-neutral-base);
    display: flex;
    height: 100dvh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100dvw;
  }
</style>
