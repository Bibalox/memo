<script setup lang="ts">
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', systemTheme)
</script>

<template>
  <router-view class="label" />
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
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
    justify-content: center;
    min-height: 100vh;
    padding: 16px;
    width: 100vw;
  }
</style>
