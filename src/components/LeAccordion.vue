<script setup lang="ts">
//  import { reactive } from 'vue'

  import LeAccordionHeader from '@components/LeAccordionHeader.vue'
  import LeAccordionItem from '@components/LeAccordionItem.vue'
  import LeDivider from '@components/LeDivider.vue'

  defineProps<{
    title: string
    items: {id: number, label: string, date: Date}[]
  }>()

  // new Date(1778335177)

</script>

<template>
  <div
    class="le-accordion"
  >
    <header class="le-accordion__header">
      <le-accordion-header
        :label="title"
        icon="chevron-down"
      />
    </header>
    <div class="le-accordion__item-list">
      <div
        v-for="(item, index) in items"
        :key="index"
      >
        <le-accordion-item
          :date="item.date"
          :label="item.label"
        />
        <le-divider v-if="index + 1 < items.length" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .le-accordion {
    border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
    border-radius: var(--radius-l);
    display: flex;
    flex-direction: column;
    width: 100%;

    &__header {
      padding: var(--spacing-static-xxs);
    }

    &__item-list {
      border-top: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
      display: flex;
      flex-direction: column;
      padding: var(--spacing-static-xs) var(--spacing-static-s);
    }
  }
</style>
