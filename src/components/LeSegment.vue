<script setup lang="ts">
  defineProps<{
    icon: string
    selected: boolean
  }>()
</script>

<template>
  <button :class="['le-segment', { 'le-segment--selected': selected }]">
    <svg class="le-segment__icon">
      <use :href="`#${icon}`" />
    </svg>
  </button>
</template>

<style lang="scss">
  .le-segment {
    align-items: center;
    background-color: transparent;
    border: var(--stroke-width) solid transparent;
    border-radius: var(--radius-m);
    display: flex;
    fill: var(--foreground-neutral-base);
    height: 40px;
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

    // &:active {
    //   background-color: var(--foreground-accent-weak);
    //   fill: var(--foreground-accent-strong);
    //   transform: translateY(2px);
    // }

    &:focus-visible {
      border-color: var(--foreground-accent-base);
    }
  }
</style>
