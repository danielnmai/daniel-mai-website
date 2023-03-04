<script setup lang="ts">
import PortfolioItem from "./PortfolioItem.vue";
</script>

<template>
  <PortfolioItem>
    <template #heading>PayConnect Platform V2</template>
    <template #photo>
      <img
        alt="project_screenshot"
        class="max-w-3xl"
        src="@/assets/pictures/project1.jpg"
      />
    </template>
    <template #details
      >A payment platform serving more than 5000 dental practices across the US.
    </template>
  </PortfolioItem>
  <PortfolioItem>
    <template #heading>Genshin Impact Guide</template>
    <template #details
      >A mobile app providing character build guidance for Genshin Impact, a
      popular RPG game. Written with React Native.
    </template>
  </PortfolioItem>
</template>
