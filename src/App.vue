<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '@store'

  import LeLoginWidget from '@components/LeLoginWidget.vue'

  const route = useRoute()
  const store = useStore()

  const mainContainer = ref()

  onMounted(() => { mainContainer.value = document.querySelector('#app') })

  watch(route, () => {
    const classList = mainContainer.value?.classList
    if (route.meta.withToolbar) {
      classList?.add('app__main--with-toolbar')
     } else {
      classList?.remove('app__main--with-toolbar')
     }
  })
</script>

<template>
  <main
    id="main"
    class="app__main"
    :class="{ 'app__main--full-screen': !store.state.connected }"
  >
    <router-view v-if="store.state.connected" />

    <le-login-widget v-else />
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
    padding: calc(env(safe-area-inset-top) + var(--spacing-responsive-m)) var(--spacing-responsive-m) calc(env(safe-area-inset-bottom) + var(--spacing-responsive-m));
    width: 100vw;

    &__main {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-static-l);
      max-width: 640px;
      width: 100%;

      &--with-toolbar {
        padding-top: calc(var(--spacing-responsive-m) * 2 + 48px);
      }

      &--full-screen {
        max-width: unset;
      }
    }
  }
</style>
