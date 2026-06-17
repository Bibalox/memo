<script setup lang="ts">
  import { toRef } from 'vue'

  import LeButton from '@components/LeButton.vue'
  import LeSegmentedControl from '@components/LeSegmentedControl.vue'
  
  const props = defineProps<{
    mode: 'write' | 'read'
  }>()

const mode = toRef(props.mode)
</script>

<template>
  <le-segmented-control
    :current-mode="mode"
    @click-on-segment="(newMode) => mode = newMode"
  />

  <form v-if=" mode === 'read'">
    
  </form>

  <div v-if=" mode === 'write'">

  </div>

  <le-button
    type="both"
    to="home"
    label="Retour"
    icon="arrow-left"
  />
</template>

<style lang="scss">
</style>