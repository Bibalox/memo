<script setup lang="ts">
  import { ref } from 'vue'

  import LeSegment from '@components/LeSegment.vue'
  
  const selectedSegment = ref<'first' | 'last'>('last')

  // defineProps<{
  //   icon: string
  //   selected?: boolean
  // }>()
</script>

<template>
  <div class="le-segmented-control">
    <div :class="['le-segmented-control__selection-ring', `le-segmented-control__selection-ring--${selectedSegment}`]" />
    <le-segment
      icon="write"
      :selected="selectedSegment === 'first'"
      position="first"
      @click="selectedSegment = 'first'"
    />
    <le-segment
      icon="read"
      :selected="selectedSegment === 'last'"
      position="last"
      @click="selectedSegment = 'last'"
    />
  </div>
</template>

<style lang="scss">
  .le-segmented-control {
    background-color: var(--background-weak);
    border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
    border-radius: var(--radius-l);
    display: flex;
    gap: calc(var(--spacing-static-xs) + var(--stroke-width));
    padding: var(--spacing-static-xs);
    position: relative;
    width: fit-content;

    &__selection-ring {
      border: var(--stroke-width) solid var(--foreground-accent-base);
      border-radius: var(--radius-m);
      height: calc(36px + var(--stroke-width) * 2);
      position: absolute;
      transition: transform 200ms ease;
      width: calc(64px + var(--stroke-width) * 2);

      top: calc(var(--spacing-static-xs) - var(--stroke-width));
      left: calc(var(--spacing-static-xs) - var(--stroke-width));


      &--first {
        transform: translateX(0);
      }

      &--last {
        transform: translateX(calc(64px + var(--spacing-static-xs) + var(--stroke-width)));
      }
    }
  }
</style>
