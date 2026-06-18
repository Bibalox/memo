<script setup lang="ts">
  import { ref } from 'vue'

  import LeAccordion from '@components/accordion/LeAccordion.vue'
  import LeButton from '@components/LeButton.vue'
  import LeDivider from '@components/LeDivider.vue'
  import LeInput from '@components/LeInput.vue'

  const items = [
    {id: 23, label: 'Films', date: new Date(1778335177)},
    {id: 32, label: 'Séries', date: new Date(1652104777)},
    {id: 44, label: 'Jeux vidéos', date: new Date(1781013577)}
  ]

  const toto = ref('')
</script>

<template>
  <svg class="logo">
    <use href="#logo" />
  </svg>
  <div class="grid">
    <svg class="icon">
      <use href="#write" />
    </svg>
    <svg class="icon">
      <use href="#read" />
    </svg>
    <svg class="icon">
      <use href="#chevron" />
    </svg>
    <svg class="icon">
      <use href="#arrow-left" />
    </svg>
  </div>

  <form class="form">
    <le-input
      id="userInput"
      v-model="toto"
      type="email"
      autocomplete="username"
      label="Identifiant"
    />
    <le-divider />
    <le-input
      id="passwordInput"
      type="password"
      autocomplete="current-password"
      label="Mot de passe"
    />
  </form>

  <div class="grid">
    <span v-text="toto" />
  </div>

  <le-accordion
    title="Favoris"
    :items="items"
    open
  />
  <le-accordion
    title="Listes"
    :items="items"
  />

  <div class="grid">
    <le-button
      type="text"
      to="write-note"
      label="Note"
    />
  </div>
</template>

<style lang="scss">
  .form {
    background-color: var(--background-weak);
    border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
    border-radius: var(--radius-l);
    gap: var(--spacing-static-xs);
    display: flex;
    flex-direction: column;
    padding: var(--spacing-static-s);
    width: 100%;
  }

  .logo {
    height: 400px;
    aspect-ratio: 1;
  }

  .grid {
    color: var(--foreground-neutral-base);
    display: flex;
    gap: 24px;
  }
  
  .icon {
    fill: var(--foreground-neutral-base);
    height: 24px;
    width: 24px;
  }
</style>
