<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '@store'

  import LeLoginWidget from '@components/LeLoginWidget.vue'

  const route = useRoute()
  const store = useStore()

  onMounted(async () => await store.init())
</script>

<template>
  <main
    id="main"
    class="app__main"
    :class="{
      'app__main--full-screen': !store.state.connected,
      'app__main--with-toolbar': route.meta.withToolbar,
    }"
  >
    <div
      class="app__top-gradient"
      :class="{
        'app__top-gradient--with-toolbar': route.meta.withToolbar,
      }"
    />
    <span
      v-if="!store.state.initialized"
      class="app__loader label"
      v-text="'Chargement'"
    />
    <le-login-widget
      v-else-if="!store.state.connected"
    />
    <span
      v-else-if="!store.state.loaded"
      class="app__loader label"
      v-text="'Chargement'"
    />
    <router-view
      v-else
    />
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
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100dvh;
    padding: 0;
  }

  .app {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: var(--spacing-responsive-m) var(--spacing-responsive-m) calc(env(safe-area-inset-bottom) + var(--spacing-responsive-m));
    width: 100vw;

    &__main {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-static-l);
      max-width: 640px;
      width: 100%;

      &--with-toolbar {
        padding-top: calc(var(--spacing-responsive-m) + 48px);
      }

      &--full-screen {
        max-width: unset;
      }
    }

    @media (min-device-width: 600px) {
      &__top-gradient {
        background: linear-gradient(var(--background-base) 0%, transparent 100%);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--spacing-responsive-m);

        &--with-toolbar {
          padding-top: calc(var(--spacing-responsive-m) + 48px);
        }
      }
    }

    &__loader {
      align-items: center;
      display: flex;
      color: var(--foreground-neutral-base);
      height: 100%;
      justify-content: center;
    }
  }
</style>
