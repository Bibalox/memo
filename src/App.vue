<script setup lang="ts">

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
    background-color: var(--background-base);
    margin: 0;
    min-height: 100dvh;
    padding: 0;

    display: flex;
    flex-direction: column;
  }

  .app {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: calc(env(safe-area-inset-top) + var(--spacing-responsive-m)) var(--spacing-responsive-m) calc(env(safe-area-inset-bottom) + var(--spacing-responsive-m));
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
