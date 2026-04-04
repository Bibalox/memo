<script setup lang="ts"></script>

<template>
  <!-- <form class="editor">
    <textarea class="editor__textField"/>
  </form> -->

  <div class="editor__textField" contenteditable />
</template>

<style lang="scss">
  // #58bae7
  
  @font-face {
    font-family: Writer;
    src: url(/font/writer-regular.ttf) format("truetype");
    font-display: block;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #F7F7F7;
    font-family: Writer;
    padding: 0;
    margin: 0;
  }

  .app {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 16px;
    width: 100vw;
  }

  .editor {
    border-left: 1px solid black;
    display: flex;
    max-width: 800px;
    width: 100%;

    &__textField {
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
  }
</style>
