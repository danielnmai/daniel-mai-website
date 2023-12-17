<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Headline from "./components/TheHeadline.vue";
</script>

<template>
  <header class="leading-normal max-h-screen mt-10">
    <div>
      <Headline title="DANIEL MAI" />
      <nav>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-lg" to="/">Home</RouterLink>
        </div>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-lg" to="/portfolio">Work</RouterLink>
        </div>
        <div class="flex justify-center lg:justify-start">
          <RouterLink class="mt-2 text-lg" to="/contact">Contact</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
