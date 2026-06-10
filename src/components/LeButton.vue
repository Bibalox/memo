<script setup lang="ts">
  defineProps<{
    label?: string
    icon?: string
    type: 'icon' | 'text' | 'both'
    to: string
  }>()
</script>

<template>
  <router-link
    :to="{ name: to }"
    class="le-button label"
    :class="`le-button--${type}`"
    tabindex="0"
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
    >
      {{ label }}
    </span>
  </router-link>
</template>

<style lang="scss">
  .le-button {
    align-items: center;
    background-color: var(--background-weak);
    border: var(--stroke-width) solid transparent;
    border-radius: var(--radius-l);
    color: var(--foreground-neutral-base);
    display: flex;
    fill: var(--foreground-neutral-base);
    height: 48px;
    justify-content: center;
    outline: var(--stroke-width) solid transparent;
    outline-offset: var(--stroke-width);
    text-decoration: none;
    transition: all 200ms ease-in-out;

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
      width: 48px;
    }

    &--text {
      border-color: var(--foreground-neutral-base);
      padding: 0 var(--spacing-static-xl);
    }

    &--both {
      border-color: var(--foreground-neutral-base);
      gap: var(--spacing-static-xs);
      padding: 0 var(--spacing-static-xl) 0 var(--spacing-static-m);
    }

    &:hover {
      background-color: var(--foreground-accent-weak);
      border-color: var(--foreground-accent-strong);
      color: var(--foreground-accent-strong);
      fill: var(--foreground-accent-strong);
    }

    &:focus-visible {
      outline-color: var(--foreground-accent-base);
    }
  }
</style>
