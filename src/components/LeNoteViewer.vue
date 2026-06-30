<script setup lang="ts">
  import { computed } from 'vue'
  import { parseMarkdown, parseInline } from '@utils/markdown'
  import type { TextBlock } from '@types'

  const props = defineProps<{
    content?: string
  }>()

  const blocks = computed<TextBlock[]>(() =>
    parseMarkdown(props.content ?? '').map(block => {
      switch (block.type) {
        case 'paragraph':
          return {
            type: 'paragraph',
            content: block.content,
            parts: parseInline(block.content ?? ''),
          }

        case 'unordered-list':
          return {
            type: 'unordered-list',
            items: block.items,
          }

        case 'ordered-list':
          return {
            type: 'ordered-list',
            items: block.items,
          }

        case 'title':
          return {
            type: 'title',
            content: block.content,
          }

        case 'blockquote':
          return {
            type: 'blockquote',
            lines: block.lines,
          }

        case 'divider':
          return {
            type: 'divider',
          }

        default: {
          const _exhaustive: never = block
          return _exhaustive
        }
      }
    }),
  )
</script>

<template>
  <section class="le-note-viewer">
    <template
      v-for="(block, blockIndex) in blocks"
      :key="blockIndex"
    >
      <h2
        v-if="block.type === 'title'"
        class="le-note-viewer__title title"
      >
        {{ block.content }}
      </h2>

      <p
        v-else-if="block.type === 'paragraph'"
        class="le-note-viewer__paragraph body"
      >
        <template
          v-for="(part, index) in block.parts"
          :key="`${part.type}-${index}`"
        >
          <a
            v-if="part.type === 'link'"
            :href="part.content"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ part.content }}
          </a>
          <span v-else>{{ part.content }}</span>
        </template>
      </p>

      <ul
        v-else-if="block.type === 'unordered-list'"
        class="le-note-viewer__list le-note-viewer__list--unordered body"
      >
        <li
          v-for="(item, itemIndex) in block.items"
          :key="itemIndex"
        >
          <template
            v-for="(part, partIndex) in item.parts"
            :key="`${part.type}-${partIndex}`"
          >
            <a
              v-if="part.type === 'link'"
              :href="part.content"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ part.content }}
            </a>
            <span v-else>{{ part.content }}</span>
          </template>
        </li>
      </ul>

      <ol
        v-else-if="block.type === 'ordered-list'"
        class="le-note-viewer__list body"
      >
        <li
          v-for="(item, itemIndex) in block.items"
          :key="itemIndex"
        >
          <template
            v-for="(part, partIndex) in item.parts"
            :key="`${part.type}-${partIndex}`"
          >
            <a
              v-if="part.type === 'link'"
              :href="part.content"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ part.content }}
            </a>
            <span v-else>{{ part.content }}</span>
          </template>
        </li>
      </ol>

      <div
        v-else-if="block.type === 'blockquote'"
        class="le-note-viewer__blockquote body"
      >
        <p
          v-for="(line, index) in block.lines"
          :key="index"
          class="le-note-viewer__blockquote__line"
        >
          {{ line }}
        </p>
      </div>

      <hr
        v-else-if="block.type === 'divider'"
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

    & a {
      color: var(--foreground-accent-base);
    }

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
      width: 50%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
