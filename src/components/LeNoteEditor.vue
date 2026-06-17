<script setup lang="ts">
  import { ref, useTemplateRef, onMounted } from 'vue'

  const textField = useTemplateRef('textField')

  const rawText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae bibendum erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse consequat, turpis sit amet accumsan tincidunt, odio quam tempor tellus, nec auctor enim lacus eu tortor. Integer accumsan felis ac enim pharetra efficitur. Maecenas pellentesque elementum nisl, vitae porttitor lorem dignissim quis. Morbi consectetur vehicula dui quis lacinia. Cras ac tincidunt augue, a porttitor nisl. Pellentesque sed posuere dui, at imperdiet dui. Suspendisse tincidunt mauris at risus molestie, ut accumsan nisl gravida. Donec luctus euismod blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend porttitor turpis, sit amet sodales lacus vehicula quis. Ut sit amet accumsan mauris, ut tincidunt velit. Nulla dapibus blandit turpis ut semper. Donec consequat mollis urna sed blandit. Integer nec posuere leo. Duis tellus tellus, tincidunt in dolor non, faucibus rhoncus ante. Suspendisse potenti. Proin a velit sapien. Cras ut iaculis sapien, vel ullamcorper lorem. Sed ullamcorper sed lacus quis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae bibendum erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse consequat, turpis sit amet accumsan tincidunt, odio quam tempor tellus, nec auctor enim lacus eu tortor. Integer accumsan felis ac enim pharetra efficitur. Maecenas pellentesque elementum nisl, vitae porttitor lorem dignissim quis. Morbi consectetur vehicula dui quis lacinia. Cras ac tincidunt augue, a porttitor nisl. Pellentesque sed posuere dui, at imperdiet dui. Suspendisse tincidunt mauris at risus molestie, ut accumsan nisl gravida. Donec luctus euismod blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend porttitor turpis, sit amet sodales lacus vehicula quis. Ut sit amet accumsan mauris, ut tincidunt velit. Nulla dapibus blandit turpis ut semper. Donec consequat mollis urna sed blandit. Integer nec posuere leo. Duis tellus tellus, tincidunt in dolor non, faucibus rhoncus ante. Suspendisse potenti. Proin a velit sapien. Cras ut iaculis sapien, vel ullamcorper lorem. Sed ullamcorper sed lacus quis rhoncus.')

  onMounted(() => {
    if (textField.value) textField.value.focus()
  })
</script>

<template>
  <form class="le-note-editor">
    <textarea
      ref="textField"
      v-model="rawText"
      class="le-note-editor__textField body"
      contenteditable="plaintext-only"
      autofocus
    />
  </form>
</template>

<style lang="scss">
  .le-note-editor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;

    &__textField {
      background-color: transparent;
      border: none;
      border-radius: 0;
      caret-color: var(--foreground-accent-base);
      color: var(--foreground-neutral-base);
      field-sizing: content;
      margin: 0;
      outline: none;
      resize: none;
      width: 100%;
    }
  }
</style>
