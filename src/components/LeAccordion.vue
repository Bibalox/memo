<script setup lang="ts">
  import { ref } from 'vue'

  import LeAccordionHeader from '@components/LeAccordionHeader.vue'
  import LeAccordionItem from '@components/LeAccordionItem.vue'
  import LeDivider from '@components/LeDivider.vue'

  const props = defineProps<{
    title: string
    items: {id: number, label: string, date: Date}[]
    open?: boolean
  }>()

  const open = ref(props.open ?? false)

</script>

<template>
  <div class="le-accordion">
    <header class="le-accordion__header">
      <le-accordion-header
        :label="title"
        :open="open"
        @click="() => open = !open"
      />
    </header>
    <div
      class="le-accordion__body"
      :class="{ 'le-accordion__body--open': open}"
    >
      <div class="le-accordion__body-inner">
        <template
          v-for="(item, index) in items"
          :key="index"
        >
          <le-accordion-item
            :date="item.date"
            :label="item.label"
          />
          <le-divider v-if="index + 1 < items.length" />
        </template>
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
    overflow: hidden;
    width: 100%;

    &__header {
      padding: var(--spacing-static-xxs);
    }

    &__body {
        display: grid; 
        grid-template-rows: 0fr;
        transition: grid-template-rows 250ms ease;

      &--open {
        grid-template-rows: 1fr;
      }
    }

    &__body-inner {
      border-top: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
      overflow: hidden;
      padding: var(--spacing-static-xs) var(--spacing-static-s);
    }
  }
</style>
