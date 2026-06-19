<script setup lang="ts">
  import LeAccordion from '@components/LeAccordion.vue'

  const favoriteNotes = [
    { label: 'Films', date: new Date(1778335177) },
    { label: 'Séries', date: new Date(1652104777) },
    { label: 'Pensées', date: new Date(1781013577) },
  ]

  const notes = [
    {
      name: 'Culture',
      content: [
        { label: 'Films', date: new Date(1778335177) },
        { label: 'Jeux vidéos', date: new Date(1652104777) },
        { label: 'Musique', date: new Date(1781013577) },
        { label: 'Séries', date: new Date(1778335177) },
      ]
    },
    {
      name: 'Guides',
      content: [
        { label: 'Exercices Milo', date: new Date(1778335177) },
        { label: 'Réglages G29', date: new Date(1652104777) },
        { label: 'Télécharger sur Youtube', date: new Date(1781013577) },
      ]
    },
    {
      name: 'Idées',
      content: [
        { label: 'Cadeaux perso', date: new Date(1778335177) },
        { label: 'Cadeaux Salomé', date: new Date(1652104777) },
        { label: 'Projets', date: new Date(1781013577) },
        { label: 'Repas', date: new Date(1778335177) },
        { label: 'Sorties', date: new Date(1652104777) },
      ]
    },
    {
      name: 'Journal',
      content: [
        { label: 'Pensées', date: new Date(1778335177) },
        { label: 'Psy', date: new Date(1652104777) },
        { label: 'Tourner la page', date: new Date(1781013577) },
      ]
    },
    {
      name: 'Vrac',
      content: [
        { label: 'Artistes de psy-trance', date: new Date(1778335177) },
        { label: 'Attestation Mattiou', date: new Date(1652104777) },
        { label: 'Jeux vidéos', date: new Date(1781013577) },
        { label: 'Films', date: new Date(1778335177) },
        { label: 'Séries', date: new Date(1652104777) },
        { label: 'Jeux vidéos', date: new Date(1781013577) },
      ]
    },
  ]
</script>

<template>
  <le-accordion
    title="Favoris"
    :items="favoriteNotes"
    open
  />
  <le-accordion
    v-for="(category, index) in notes"
    :key="index"
    :title="category.name"
    :items="category.content"
  />
</template>

<style lang="scss">

</style>
