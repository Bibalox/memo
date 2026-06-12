<script setup lang="ts">
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', systemTheme)
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  input,
  textarea,
  select,
  button {
    font: inherit;
    font-feature-settings: inherit;
    font-variant-alternates: inherit;
  }

  body {
    background-color: var(--background-base);
    padding: 0;
    margin: 0;
  }

  .app {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-height: 100vh;
    padding: 16px;
    width: 100vw;
  }
</style>
