<script setup lang="ts">
  defineProps<{
    label?: string
    icon?: string
    type: 'icon' | 'text' | 'both'
    disabled?: boolean
  }>()
</script>

<template>
  <button
    :class="['le-button label', `le-button--${type}`]"
    tabindex="0"
    :disabled="disabled"
  >
    <svg
      v-if="type === 'icon' || type === 'both'"
      class="le-button__icon"
    >
      <use :href="`#${icon}`" />
    </svg>
    <span
      v-if="type === 'text' || type === 'both'"
      class="le-button__label"
      v-text="label"
    />
  </button>
</template>

<style lang="scss">
  .le-button {
    align-items: center;
    background-color: var(--background-weak);
    border-color: transparent;
    border-radius: var(--radius-l);
    color: var(--foreground-neutral-base);
    cursor: pointer;
    display: flex;
    fill: var(--foreground-neutral-base);
    height: 48px;
    justify-content: center;
    outline: var(--stroke-width) solid transparent;
    outline-offset: var(--stroke-width);
    text-decoration: none;
    transition: all 200ms ease-in-out;
    -webkit-tap-highlight-color: transparent;

    &__icon {
      height: 24px;
      width: 24px;
    }

    &__label {
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &--icon {
      border: none;
      outline-offset: 0;
      width: 48px;
    }

    &--text {
      border: var(--stroke-width) solid var(--foreground-neutral-base);
      padding: 0 var(--spacing-static-xl);
    }

    &--both {
      border: var(--stroke-width) solid var(--foreground-neutral-base);
      gap: var(--spacing-static-xs);
      padding: 0 var(--spacing-static-xl) 0 var(--spacing-static-m);
    }

    @media (hover: hover) {
      &:hover {
        background-color: var(--foreground-accent-weak);
        border-color: var(--foreground-accent-strong);
        color: var(--foreground-accent-strong);
        fill: var(--foreground-accent-strong);
      }
    }

    &:active {
      background-color: var(--foreground-accent-weak);
      border-color: var(--foreground-accent-strong);
      color: var(--foreground-accent-strong);
      fill: var(--foreground-accent-strong);
      transform: translateY(2px);
    }

    &:focus-visible {
      outline-color: var(--foreground-accent-base);
    }

    &:disabled {
      background-color: var(--background-weak);
      border-color: transparent;
      color: var(--foreground-neutral-base);
      cursor: not-allowed;
      fill: var(--foreground-neutral-base);
      opacity: .3;
      transform: none;
    }
  }
</style>
