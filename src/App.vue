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

  body {
    align-items: center;
    background-color: var(--background-base);
    display: flex;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: 0 var(--spacing-responsive-m);
  }

  .app {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    &__main {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-static-l);
      height: 100vh;
      max-width: 640px;
      padding: var(--spacing-responsive-m) 0;
      position: relative;
      width: 100%;
    }
  }
</style>
