<script setup lang="ts">

</script>

<template>
  <router-view />
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    @font-face {
      font-family: CommitMono;
      src: url("fonts/commit-mono-regular.otf");
      font-display: block;
    }

    background-color: #F7F7F7;
    font-family: CommitMono;
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
