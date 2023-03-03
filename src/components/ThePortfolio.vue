<script setup lang="ts">
import PortfolioItem from "./PortfolioItem.vue";
</script>

<template>
  <PortfolioItem>
    <template #heading>PayConnect Platform V2</template>
    <template #details
      >A payment platform serving more than 5000 dental practices across the US.
    </template>
  </PortfolioItem>
  <PortfolioItem>
    <template #heading>Genshin Impact Guide</template>
    <template #details
      >A mobile app providing character build guidance for
      <a href="https://genshin.hoyoverse.com/en/" target="_blank" rel="noopener"
        >Genshin Impact </a
      >, a popular RPG game. Written with React Native.</template
    >
  </PortfolioItem>
</template>
