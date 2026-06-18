<script setup lang="ts">
  import { ref, useTemplateRef, onMounted } from 'vue'

  const textField = useTemplateRef('textField')

  const rawText = ref('')

  onMounted(() => {
    if (textField.value) textField.value.focus()
  })
</script>

<template>
  <section class="le-note-editor">
    <textarea
      ref="textField"
      v-model="rawText"
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
        resize: none;
        width: 100%;
      }
  }
</style>
