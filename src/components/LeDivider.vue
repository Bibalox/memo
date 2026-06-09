<script setup lang="ts">

</script>

<template>
  <div class="le-divider">
    <hr class="le-divider__stroke">
  </div>
</template>

<style lang="scss">
  .le-divider {
    padding: var(--spacing-static-xs) var(--spacing-static-l);
    width: 100%;

    &__stroke {
      color: var(--foreground-neutral-weaker);
      height: var(--stroke-width);
      margin: 0;
      width: 100%;
    }
  }
</style>
