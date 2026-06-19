<script setup lang="ts">

</script>

<template>
  <main class="app__main app__main--with-toolbar">
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
      max-width: 640px;
      width: 100%;

      &--with-toolbar {
        padding-bottom: calc(var(--spacing-responsive-m) + 48px);

        @media (min-width: 900px) {
          padding-bottom: unset;
          padding-top: calc(var(--spacing-responsive-m) + 48px);
        }
      } 
    }
  }
</style>
