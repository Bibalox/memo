<script setup lang="ts">
  defineProps<{
    label: string
    icon: string
  }>()
</script>

<template>
  <button
    class="le-accordion-header"
    tabindex="0"
  >
    <span class="le-accordion-header__label label">
      {{ label }}
    </span>
    <svg class="le-accordion-header__icon">
      <use :href="`#${icon}`" />
    </svg>
  </button>
</template>

<style lang="scss">
  .le-accordion-header {
    align-items: center;
    background-color: transparent;
    border: var(--stroke-width) solid transparent;
    border-radius: var(--radius-m);
    color: var(--foreground-neutral-base);
    cursor: pointer;
    display: flex;
    fill: var(--foreground-neutral-base);
    gap: var(--spacing-static-m);
    height: 48px;
    justify-content: space-between;
    outline: none;
    overflow: hidden;
    padding: 0 var(--spacing-static-m) 0 var(--spacing-static-l);
    transition: all .2s ease-in-out;
    width: 100%;

    &__icon {
      height: 24px;
      width: 24px;
    }

    &__label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &:hover, &:focus {
      background-color: var(--foreground-accent-weak);
      border-color: var(--foreground-accent-strong);
      color: var(--foreground-accent-strong);
      fill: var(--foreground-accent-strong);
    }
  }
</style>
