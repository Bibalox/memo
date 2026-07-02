<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from '@store'
  import type { Mode } from '@types'

  import LeButton from '@components/LeButton.vue'
  import LeSegmentedControl from '@components/LeSegmentedControl.vue'

  const props = defineProps<{
    mode: Mode
    mustSync: boolean
  }>()

  defineEmits(['modeUpdate'])

  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const manageClick = async () => {
    if (props.mustSync) await store.updateNote(route.params.id as string)
    router.back()
  }
</script>

<template>
  <div class="le-toolbar">
    <div class="le-toolbar__inner">
      <le-button
        type="both"
        label="Retour"
        icon="arrow-left"
        @click="manageClick"
      />
      <le-segmented-control
        :current-mode="mode"
        @click-on-segment="(newMode) => $emit('modeUpdate', newMode)"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .le-toolbar {
    display: flex;
    justify-content: center;
    left: 0;
    padding: var(--spacing-responsive-m);
    position: fixed;
    top: 0;
    width: 100%;

    &__inner {
      display: flex;
      justify-content: space-between;
      max-width: 640px;
      width: 100%;
    }
  }
</style>
