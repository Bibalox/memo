<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from '@store'

  import LeAccordion from '@components/LeAccordion.vue'

  const store = useStore()

  onMounted(async () => {
    await store.fetchCategories()
    await store.fetchNotes()
  })
</script>

<template>
  <le-accordion
    v-if="store.favoriteNotes[0]"
    title="Favoris"
    :notes="store.favoriteNotes"
    open
  />
  <le-accordion
    v-for="category in store.categories"
    :key="category.position"
    :title="category.name"
    :notes="store.notes.filter((note) => note.category === category.id)"
  />
</template>

<style lang="scss">
.text {
  color: var(--foreground-neutral-base);
}
</style>