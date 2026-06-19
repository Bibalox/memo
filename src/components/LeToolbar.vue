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
  <div class="le-toolbar">
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
  .le-toolbar {
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-responsive-m);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
