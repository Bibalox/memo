<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useStore } from '@store'

  import LeAccordion from '@components/LeAccordion.vue'

  const store = useStore()

  onMounted(async () => {
    await store.fetchFavoriteNotes()
  })
</script>

<template>
  <le-accordion
    v-if="store.favoriteNotes"
    title="Favoris"
    :notes="store.favoriteNotes"
    open
  />
</template>

<style lang="scss">
.text {
  color: var(--foreground-neutral-base);
}
</style>