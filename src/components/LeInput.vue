<script setup lang="ts">
  defineProps<{
    label: string
    id: string
    type: 'email' | 'password'
  }>()

  const model = defineModel<String>()
</script>

<template>
  <p class="le-input">
    <label
      class="le-input__label subheadline"
      :for="id"
      v-text="label"
    />
    <input
      :id="id"
      v-model="model"
      class="le-input__input headline"
      :type="type"
    >
  </p>
</template>

<style lang="scss">
  .le-input {
    border-radius: var(--radius-s);
    color: var(--foreground-neutral-base);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-static-xs);
    margin: 0;
    outline: var(--stroke-width) solid transparent;
    padding: var(--spacing-static-m) var(--spacing-static-l);
    transition: all 200ms ease-in-out;
    -webkit-tap-highlight-color: transparent;

      &__label {
        color: var(--foreground-neutral-weak);
        cursor: pointer;
        transition: color 200ms ease-in-out;
      }

      &__input {
        background-color: transparent;
        border: none;
        border-radius: 0;
        color: inherit;
        cursor: text;
        outline: none;
        padding: 0;
        transition: color 200ms ease-in-out;
      }
    
    &:hover {
      background-color: var(--foreground-accent-weak);
      color: var(--foreground-accent-strong);
    }

    &:focus-within {
      background-color: var(--foreground-accent-weak);
      color: var(--foreground-accent-strong);
      outline-color: var(--foreground-accent-base);
    }

    &:hover > &__label, &:focus-within > &__label {
      color: var(--foreground-accent-strong);
    }
  }
</style>
