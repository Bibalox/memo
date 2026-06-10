<script setup lang="ts">
  const props = defineProps<{
    label: string
    open?: boolean
  }>()

</script>

<template>
  <button
    class="le-accordion-header"
    :class="{ 'le-accordion-header--open': props.open}"
    tabindex="0"
  >
    <span class="le-accordion-header__label label">
      {{ label }}
    </span>
    <svg
      class="le-accordion-header__icon"
      :class="{ 'le-accordion-header__icon--rotated': props.open }"
    >
      <use href="#chevron" />
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
    transition: all 200ms ease-in-out;
    width: 100%;

    &__icon {
      height: 24px;
      transition: transform 200ms ease-in-out;
      width: 24px;

      &--rotated {
        transform: rotate(-180deg);
      }
    }

    &__label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &--open {
      border-radius: var(--radius-m) var(--radius-m) 0 0;
    }

    &:hover {
      background-color: var(--foreground-accent-weak);
      color: var(--foreground-accent-strong);
      fill: var(--foreground-accent-strong);
    }

    &:focus-visible {
      border-color: var(--foreground-accent-strong);
    }
  }
</style>
