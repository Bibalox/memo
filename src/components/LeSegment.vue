<script setup lang="ts">
  defineProps<{
    selected: boolean
    mode: 'write' | 'read'
  }>()
</script>

<template>
  <button :class="['le-segment', {'le-segment--selected': selected}]">
    <svg class="le-segment__icon">
      <use :href="`#${mode}`" />
    </svg>
  </button>
</template>

<style lang="scss">
  .le-segment {
    align-items: center;
    background-color: transparent;
    border: var(--stroke-width) solid transparent;
    border-radius: var(--radius-s);
    display: flex;
    fill: var(--foreground-neutral-base);
    height: 36px;
    justify-content: center;
    outline: none;
    transition: all 200ms ease-in-out;
    -webkit-tap-highlight-color: transparent;
    width: 64px;

    &__icon {
      height: 24px;
      width: 24px;
    }

    &--selected {
      background-color: var(--foreground-accent-weak);
      fill: var(--foreground-accent-strong);
    }

    @media (hover: hover) {
      &:hover {
        background-color: var(--foreground-accent-weak);
        cursor: pointer;
        fill: var(--foreground-accent-strong);
      }
    }

    &:focus-visible {
      border-color: var(--foreground-accent-base);
    }
  }
</style>
