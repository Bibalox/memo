<script setup lang="ts">
  import { useStore } from '@store'
  import type { Note } from '@types'

  import LeAccordionHeader from '@components/LeAccordionHeader.vue'
  import LeAccordionItem from '@components/LeAccordionItem.vue'
  import LeDivider from '@components/LeDivider.vue'

  defineProps<{
    title: string
    category: string
    notes: Note[]
  }>()

  const store = useStore()

  const manageClickOnHeader = (category: string) => {
    const index = store.activeCategories.indexOf(category)

    if (index > -1) {
      store.activeCategories.splice(index, 1)
    } else {
      store.activeCategories.push(category)
    }
  }
</script>

<template>
  <div class="le-accordion">
    <header class="le-accordion__header">
      <le-accordion-header
        :label="title"
        :open="store.activeCategories.includes(category)"
        @click="manageClickOnHeader(category)"
      />
    </header>
    <div :class="['le-accordion__body', { 'le-accordion__body--open': store.activeCategories.includes(category) }]">
      <div class="le-accordion__body-inner">
        <template
          v-for="(note, index) in notes"
          :key="index"
        >
          <le-accordion-item
            :last-update="note.last_update"
            :note-id="note.id.toString()"
            :note-name="note.name"
          />
          <le-divider v-if="index + 1 < notes.length" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .le-accordion {
    background-color: var(--background-weak);
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
        transition: visibility 250ms ease, grid-template-rows 250ms ease;
        visibility: hidden;

      &--open {
        grid-template-rows: 1fr;
        visibility: visible;
      }
    }

    &__body-inner {
      border-top: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
      overflow: hidden;
      padding: var(--spacing-static-xs) var(--spacing-static-s);
    }
  }
</style>
