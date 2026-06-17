<script setup lang="ts">
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', systemTheme)
</script>

<template>
  <main class="app__main">
    <router-view />
  </main>
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

  :root {
    overscroll-behavior: none;
  }

  body {
    background-color: var(--background-base);
    display: flex;
    margin: 0;
    overflow-y: auto;
    padding: 0;
  }

  .app {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    padding: var(--spacing-responsive-m) var(--spacing-responsive-m);
    width: 100vw;

    &__main {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-static-l);
      max-width: 640px;
      width: 100%;
    }
  }
</style>
