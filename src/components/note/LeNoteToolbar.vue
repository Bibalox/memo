<script setup lang="ts">
  import type { NoteMode } from '@types'

  import LeButton from '@components/LeButton.vue'
  import LeSegmentedControl from '@components/segmented-control/LeSegmentedControl.vue'

  defineProps<{
    mode: NoteMode
  }>()

  defineEmits(['modeUpdate'])
</script>

<template>
  <div class="le-note-page-toolbar">
    <le-button
      type="both"
      to="home"
      label="Retour"
      icon="arrow-left"
    />
    <le-segmented-control
      :current-mode="mode"
      @click-on-segment="(newMode) => $emit('modeUpdate', newMode)"
    />
  </div>
</template>

<style lang="scss">
  .le-note-page-toolbar {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: var(--spacing-responsive-m);
    width: 100%; 
  }
</style>
