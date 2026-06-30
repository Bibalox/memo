<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from '@store'
  import { exportNotes } from '@utils/note-exporter'
  import type { Note } from '@types'

  import LeAccordion from '@components/LeAccordion.vue'
  import LeButton from '@components/LeButton.vue'

  const store = useStore()

  onMounted(async () => {
    await store.fetchData()
  })
</script>

<template>
  <le-accordion
    v-show="store.state.loaded"
    title="Favoris"
    category="favorites"
    :notes="store.notes.filter((note: Note) => note.favorite)"
  />
  <le-accordion
    v-for="category in store.categories"
    v-show="store.state.loaded"
    :key="category.position"
    :title="category.name"
    :category="category.id"
    :notes="store.notes.filter((note: Note) => note.category === category.id)"
  />
  <div class="home-page-toolbar">
    <le-button
      v-show="store.state.loaded"
      type="text"
      label="Exporter les notes"
      :disabled="!store.state.online"
      @click="exportNotes(store.categories, store.notes)"
    />
    <le-button
      v-show="store.state.loaded"
      type="text"
      label="Se déconnecter"
      :disabled="!store.state.online"
      @click="store.logout"
    />
  </div>
</template>

<style lang="scss">
.home-page-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-static-l);
  width: 100%;

  & > * {
    flex: 1;
    min-width: 260px;
  }
}
</style>
