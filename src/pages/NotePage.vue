<script setup lang="ts">
  import { toRef, } from 'vue'

  import LeButton from '@components/LeButton.vue'
  import LeNoteEditor from '@components/LeNoteEditor.vue'
  import LeSegmentedControl from '@components/LeSegmentedControl.vue'

  const props = defineProps<{
    mode: 'write' | 'read'
  }>()

  const mode = toRef(props.mode)


  const switchMode = (newMode: 'write' | 'read') => mode.value = newMode
</script>

<template>
  <div class="note-page-toolbar">
    <le-button
      type="both"
      to="home"
      label="Retour"
      icon="arrow-left"
    />
    <le-segmented-control
      :current-mode="mode"
      @click-on-segment="(newMode) => switchMode(newMode)"
    />
  </div>

  <le-note-editor v-if=" mode === 'write'" />

  <!-- <div v-if=" mode === 'read'" /> -->
</template>

<style lang="scss">
  .note-page-toolbar {
    justify-content: space-between;
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
  }
</style>