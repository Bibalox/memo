<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'

// the first argument must match the ref value in the template
const textField = useTemplateRef('textField')

onMounted(() => {
  if (textField.value) textField.value.focus()
})
</script>

<template>
  <div
    ref="textField"
    class="textField body"
    contenteditable="plaintext-only"
    autofocus
  />
  <router-link
    :to="{ name: 'home' }"
    class="label"
  >
    Go back Home
  </router-link>
</template>

<style lang="scss">
  .textField {
    background-color: transparent;
    border: none;
    border-radius: 0;
    caret-color: var(--foreground-accent-base);
    color: var(--foreground-neutral-primary-base);
    margin: 0;
    max-width: 800px;
    outline: none;
    resize: none;
    width: 100%;
  }
</style>
