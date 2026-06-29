<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from '@store'
  import { exportNotes } from '@utils/note-export'
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
    v-show="store.loaded"
    title="Favoris"
    :notes="store.notes.filter((note: Note) => note.favorite)"
    open
  />
  <le-accordion
    v-for="category in store.categories"
    v-show="store.loaded"
    :key="category.position"
    :title="category.name"
    :notes="store.notes.filter((note: Note) => note.category === category.id)"
  />
  <le-button
    v-show="store.loaded"
    type="text"
    label="Exporter les notes"
    @click="exportNotes()"
  />
</template>

<style lang="scss">

</style>
