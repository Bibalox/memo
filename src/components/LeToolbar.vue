<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { Mode } from '@types'

  import LeButton from '@components/LeButton.vue'
  import LeSegmentedControl from '@components/LeSegmentedControl.vue'

  defineProps<{
    mode: Mode
  }>()

  defineEmits(['modeUpdate'])

  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push({ path })
  }
</script>

<template>
  <div class="le-toolbar">
    <le-button
      type="both"
      label="Retour"
      icon="arrow-left"
      @click="navigateTo('/')"
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
