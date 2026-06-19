<script setup lang="ts">
  import { computed } from 'vue'
  import { parseMarkdown } from '@utils'

  const props = defineProps<{
    content: string
  }>()

  const splitContent = computed(() => parseMarkdown(props.content))
</script>

<template>
  <section class="le-note-viewer">
    <template
      v-for="(block, blockIndex) in splitContent"
      :key="blockIndex"
    >
      <h2
        v-if="block.type === 'title'"
        class="le-note-viewer__title title"
        v-text="block.content"
      />

      <p
        v-if="block.type === 'paragraph'"
        class="le-note-viewer__paragraph body"
        v-text="block.content"
      />

      <ul
        v-if="block.type === 'unordered-list'"
        class="le-note-viewer__list le-note-viewer__list--unordered body"
      >
        <li
          v-for="(item, itemIndex) in block.items"
          :key="itemIndex"
          v-text="item"
        />
      </ul>

      <ol
        v-if="block.type === 'ordered-list'"
        class="le-note-viewer__list body"
      >
        <li
          v-for="(item, itemIndex) in block.items"
          :key="itemIndex"
          v-text="item"
        />
      </ol>

      <div
        v-if="block.type === 'blockquote'"
        class="le-note-viewer__blockquote body"
      >
        <p
          v-for="(line, itemIndex) in block.lines"
          :key="itemIndex"
          class="le-note-viewer__blockquote__line"
          v-text="line"
        />
      </div>

      <hr
        v-if="block.type === 'divider'"
        class="le-note-viewer__divider"
      >
    </template>
  </section>
</template>

<style lang="scss">
  .le-note-viewer {
    color: var(--foreground-neutral-base);
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    
    &__title {
      margin: 0 0 var(--spacing-static-s);

      &:last-child {
        margin: 0;
      }
    }

    &__paragraph {
      margin: 0 0 var(--body-line-height);

      &:last-child {
        margin: 0;
      }
    }

    &__list {
      margin: 0 0 var(--body-line-height);
      

      &--unordered {
        padding: 0 0 0 var(--body-font-size);
      }

      &:last-child {
        margin: 0;
      }
    }

    &__blockquote {
      border-left: var(--stroke-width) solid var(--foreground-neutral-weak);
      margin: 0 0 var(--body-line-height);
      padding-left: var(--spacing-static-xxl);

      &__line {
        margin: 0;
      }

      &:last-child {
        margin: 0;
      }
    }

    &__divider {
      background-color: var(--foreground-neutral-weak);
      height: var(--stroke-width);
      border: none;
      padding: 0;
      margin: var(--body-line-height) 0;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
