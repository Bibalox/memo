<script setup lang="ts">
  import { onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  let mainContainer: HTMLElement | null
  
  onMounted(() => { mainContainer = document.querySelector('#app') })

  watch(route, () => {
    const classList = mainContainer?.classList
    console.log(classList)
    if (route.meta.withToolbar) {
      classList?.add('app__main--with-toolbar')
      console.log('toto')
    } else {
      classList?.remove('app__main--with-toolbar')
      console.log('tata')
    }
  })
</script>

<template>
  <main
    id="main"
    class="app__main"
  >
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
    }
  }
</style>
