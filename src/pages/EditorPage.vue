<script setup lang="ts">

</script>

<template>
  <div
    class="textField"
    contenteditable
    autofocus
  />
  <router-link :to="{ name: 'home' }">
    Go back Home
  </router-link>
</template>

<style lang="scss">
  .textField {
    -webkit-font-smoothing: antialiased;
    background-color: transparent;
    border: none;
    border-radius: 0;
    caret-color: #58bae7;
    color: #1a1a1a;
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    max-width: 800px;
    outline: none;
    resize: none;
    width: 100%;
  }
</style>
