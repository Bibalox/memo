<script setup lang="ts">
  import LeAccordion from '@components/LeAccordion.vue'

  const favoriteNotes = [
    { label: 'Carnet', date: new Date(1778335177) },
    { label: 'Idées repas', date: new Date(1652104777) },
    { label: 'Journal', date: new Date(1781013577) },
    { label: 'Musique', date: new Date(1778335177) },
    { label: 'Séries & films', date: new Date(1652104777) },
  ]

  const notes = [
    {
      name: 'Notes',
      content: [
        { label: 'Carnet', date: new Date(1778335177) },
        { label: 'Journal', date: new Date(1652104777) },
        { label: 'Psycho', date: new Date(1778335177) },
        { label: 'Télécharger sur Youtube', date: new Date(1781013577) },
        { label: 'Tourner la page', date: new Date(1778335177) },
      ]
    },
    {
      name: 'Listes',
      content: [
        { label: 'Idées cadeaux', date: new Date(1778335177) },
        { label: 'Idées repas', date: new Date(1652104777) },
        { label: 'Idées Sorties', date: new Date(1781013577) },
        { label: 'Jeux vidéos', date: new Date(1778335177) },
        { label: 'Musique', date: new Date(1778335177) },
        { label: 'Projets', date: new Date(1652104777) },
        { label: 'Séries & films', date: new Date(1781013577) },
      ]
    },
    {
      name: 'Archives',
      content: [
        { label: 'Artistes de psy-trance', date: new Date(1778335177) },
        { label: 'Noms de films rigolos', date: new Date(1652104777) },
        { label: 'Noms pour la Jogger', date: new Date(1781013577) },
        { label: 'Exercices Milo', date: new Date(1778335177) },
        { label: 'Réglages G29', date: new Date(1652104777) },
        { label: 'Carnet alimentaire', date: new Date(1781013577) },
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