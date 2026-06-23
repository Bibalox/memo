<script setup lang="ts">
  import { computed } from 'vue'

  import LeButton from '@components/LeButton.vue'

  const props = defineProps<{
    lastUpdate?: number
    noteId: string
    noteName: string
  }>()

  const relativeTime = computed(() => {
    if (props.lastUpdate) {
      const now = Date.now()
      const then = props.lastUpdate
      const duration = (now - then) / 1000
    
      if (duration < 60) {
        return "Il y a quelques instants"
      } else if (duration < 3600) {
        return `Il y a ${Math.round(duration / 60)} minute(s)`
      } else if (duration < 86400) {
        return `Il y a ${Math.round(duration / 3600)} heure(s)`
      } else if (duration < 2620800) {
        return `Il y a ${Math.round(duration / 86400)} jour(s)`
      } else if (duration < 31449600) {
        return `Il y a ${Math.round(duration / 2620800)} mois`
      } else {
        return `Il y a ${Math.round(duration / 31449600)} an(s)`
      }
    } else {
      return '--'
    }

  })
</script>

<template>
  <div class="le-accordion-item">
    <div class="le-accordion-item__texts">
      <span
        class="le-accordion-item__date subheadline"
        v-text="relativeTime"
      />
      <span
        class="le-accordion-item__label headline"
        v-text="noteName"
      />
    </div>
    <le-button
      type="icon"
      icon="write"
      :to="`note/${noteId}/write`"
    />
    <le-button
      type="icon"
      icon="read"
      :to="`note/${noteId}/read`"
    />
  </div>
</template>

<style lang="scss">
  .le-accordion-item {
    align-items: center;
    display: flex;
    gap: var(--spacing-static-s);
    height: 72px;
    padding: 0 var(--spacing-static-xl) 0 var(--spacing-static-m);
    width: 100%;

    &__texts {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: var(--spacing-static-xs);
      overflow: hidden;
    }

    &__date {
      color: var(--foreground-neutral-weak);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &__label {
      color: var(--foreground-neutral-base);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
