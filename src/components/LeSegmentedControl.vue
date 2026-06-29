<script setup lang="ts">
  import type { Mode } from '@types'

  import LeSegment from '@components/LeSegment.vue'

  defineProps<{
    currentMode: Mode
  }>()

  defineEmits(['clickOnSegment'])
</script>

<template>
  <div
    class="le-segmented-control"
  >
    <div :class="['le-segmented-control__selection-ring', `le-segmented-control__selection-ring--${currentMode}`]" />
    <le-segment
      v-for="(mode, key) in ['write', 'read']"
      :key="key"
      :selected="currentMode === mode"
      :mode="mode"
      @click="$emit('clickOnSegment', mode)"
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
      left: calc(var(--spacing-static-xs) - var(--stroke-width));
      position: absolute;
      top: calc(var(--spacing-static-xs) - var(--stroke-width));
      transition: transform 200ms 50ms ease;
      width: calc(64px + var(--stroke-width) * 2);

      &--write {
        transform: translateX(0);
      }

      &--read {
        transform: translateX(calc(64px + var(--spacing-static-xs) + var(--stroke-width)));
      }
    }
  }
</style>
