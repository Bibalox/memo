<script setup lang="ts">
  import { useTemplateRef, onMounted } from 'vue'

  const field = useTemplateRef('field')

  onMounted(() => { if (field.value && fieldContent.value === '') field.value.focus() })

  const fieldContent = defineModel<string>()
</script>

<template>
  <section class="le-note-editor">
    <textarea
      ref="field"
      v-model="fieldContent"
      class="le-note-editor__field body"
      contenteditable="plaintext-only"
    />
  </section>
</template>

<style lang="scss">
  .le-note-editor {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

      &__field {
        -webkit-font-smoothing: antialiased;
        background-color: transparent;
        border: none;
        border-radius: 0;
        caret-color: var(--foreground-accent-base);
        color: var(--foreground-neutral-base);
        field-sizing: content;
        margin: 0;
        outline: none;
        padding: 0;
        resize: none;
        width: 100%;
      }
  }
</style>
