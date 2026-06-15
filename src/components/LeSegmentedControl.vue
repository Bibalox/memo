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
    <le-segment
      icon="write"
      :selected="selectedSegment === 'first'"
      @click="selectedSegment = 'first'"
    />
    <le-segment
      icon="read"
      :selected="selectedSegment === 'last'"
      @click="selectedSegment = 'last'"
    />
    <div :class="['le-segmented-control__selection-ring', `le-segmented-control__selection-ring--${selectedSegment}`]" />
  </div>
</template>

<style lang="scss">
  .le-segmented-control {
    border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
    border-radius: var(--radius-l);
    display: flex;
    gap: var(--spacing-static-xxs);
    padding: var(--spacing-static-xxs);
    position: relative;
    width: fit-content;

    &__selection-ring {
      border: var(--stroke-width) solid var(--foreground-accent-base);
      border-radius: var(--radius-m);
      height: 40px;
      position: absolute;
      transition: transform 300ms ease;
      width: 64px;

      &--first {
        transform: translateX(0);
      }

      &--last {
        transform: translateX(66px);
      }
    }
  }
</style>
