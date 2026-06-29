<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from '@store'
  import type { Note } from '@types'

  import LeAccordion from '@components/LeAccordion.vue'

  const store = useStore()

  onMounted(async () => {
    if (!store.loaded) await store.fetchData()
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
</template>

<style lang="scss">
.text {
  color: var(--foreground-neutral-base);
}
</style>
