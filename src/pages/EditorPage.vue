<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import leButton from '@components/leButton.vue'

const textField = useTemplateRef('textField')

onMounted(() => {
  if (textField.value) textField.value.focus()
})
</script>

<template>
  <svg class="logo">
    <use href="#logo" />
  </svg>
  <div class="icon-grid">
    <svg class="icon">
      <use href="#write" />
    </svg>
    <svg class="icon">
      <use href="#read" />
    </svg>
    <svg class="icon">
      <use href="#chevron-down" />
    </svg>
    <svg class="icon">
      <use href="#chevron-up" />
    </svg>
    <svg class="icon">
      <use href="#arrow-left" />
    </svg>
  </div>
  <div
    ref="textField"
    class="textField body"
    contenteditable="plaintext-only"
    autofocus
  />
  <le-button
    to="home"
    label="retour"
  />
</template>

<style lang="scss">
  .textField {
    background-color: transparent;
    border: none;
    border-radius: 0;
    caret-color: var(--foreground-accent-base);
    color: var(--foreground-neutral-base);
    margin: 0;
    max-width: 800px;
    outline: none;
    resize: none;
    width: 100%;
  }

  .logo {
    height: 400px;
    aspect-ratio: 1;
  }

  .icon-grid {
    display: flex;
    gap: 24px;
  }
  
  .icon {
    fill: var(--foreground-neutral-base);
    height: 24px;
    width: 24px;
  }
</style>
