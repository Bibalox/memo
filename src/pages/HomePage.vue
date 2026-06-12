<script setup lang="ts">
  import { ref } from 'vue'

  import LeAccordion from '@components/LeAccordion.vue'
  import LeButton from '@components/LeButton.vue'
  import LeInput from '@components/LeInput.vue'
  import LeDivider from '@components/LeDivider.vue'

  const items = [
    {id: 23, label: 'Films', date: new Date(1778335177)},
    {id: 32, label: 'Séries', date: new Date(1652104777)},
    {id: 44, label: 'Jeux vidéos', date: new Date(1781013577)}
  ]

  const toto = ref('')
</script>

<template>
  <div class="template">
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
        type="text"
        label="Identifiant"
      />
      <le-divider />
      <le-input
        id="passwordInput"
        type="password"
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
        to=""
        label="retour"
      />
      <le-button
        type="icon"
        to=""
        icon="write"
      />
      <le-button
        type="both"
        to=""
        label="retour"
        icon="arrow-left"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .template {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px;
  }

  .form {
    background-color: var(--background-weak);
    border: var(--stroke-width) solid var(--foreground-neutral-alternative-base);
    border-radius: var(--radius-l);
    gap: var(--spacing-static-xs);
    display: flex;
    flex-direction: column;
    padding: var(--spacing-static-s);
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
