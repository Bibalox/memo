<script setup lang="ts">
  import { computed } from 'vue'
  import { parseMarkdown } from '@utils/parse-markdown'

  const props = defineProps<{
    content: string
  }>()

  const splitContent = computed(() => parseMarkdown(props.content))
</script>

<template>
  <section class="le-note-viewer">
    <template
      v-for="(block, index) in splitContent"
      :key="index"
    >
      <h2
        v-if="block.type === 'title'"
        class="le-note-title title"
        v-text="block.content"
      />

      <p
        v-if="block.type === 'paragraph'"
        class="le-note-paragraph body"
        v-text="block.content"
      />

      <ul
        v-if="block.type === 'list'"
        class="le-note-list body"
      >
        <li
          v-for="(item, tata) in block.items"
          :key="tata"
          v-text="item"
        />
      </ul>

      <div
        v-if="block.type === 'blockquote'"
        class="le-note-blockquote tata body"
      >
        <p
          v-for="(line, tata) in block.lines"
          :key="tata"
          class="le-note-blockquote__line"
          v-text="line"
        />
      </div>

      <hr
        v-if="block.type === 'divider'"
        class="le-note-divider"
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
  }

  .le-note-title {
    margin: 0 0 var(--spacing-static-s);
  }

  .le-note-paragraph {
    margin: 0 0 var(--spacing-static-xxl);
  }

  .le-note-list {
    margin: 0 0 var(--spacing-static-xxl);
  }

  .le-note-blockquote {
    border-left: var(--stroke-width) solid var(--foreground-neutral-weak);
    margin: 0 0 var(--spacing-static-xxl);
    padding-left: var(--spacing-responsive-m);

    &__line {
      margin: 0;
    }
  }

  .le-note-divider {
    background-color: var(--foreground-neutral-weak);
    height: var(--stroke-width);
    border: none;
    padding: 0;
    margin: var(--spacing-static-xxl) 0;
    width: 100%;
  }
</style>
