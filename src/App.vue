<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Headline from "./components/TheHeadline.vue";
</script>

<template>
  <header class="leading-normal max-h-screen mt-10">
    <div>
      <Headline title="DANIEL MAI" />
      <nav class="flex flex-col w-full lg:text-left text-base mt-5">
        <RouterLink class="max-w-fit mt-2 text-lg" to="/">Home</RouterLink>
        <RouterLink class="max-w-fit mt-2 text-lg" to="/about"
          >About</RouterLink
        >
        <RouterLink class="max-w-fit mt-2 text-lg" to="/portfolio"
          >Work</RouterLink
        >
        <RouterLink class="max-w-fit mt-2 text-lg" to="/contact"
          >Contact</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>
