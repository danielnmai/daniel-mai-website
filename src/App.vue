<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Headline from "./components/TheHeadline.vue";
</script>

<template>
  <header class="leading-normal max-h-screen mt-10">
    <!-- <img
      alt="Vue logo"
      class="block mt-0 mx-auto mb-8 w-[125px] h-[125px] p-1"
      src="@/assets/logo.svg"
    /> -->

    <div>
      <Headline title="DANIEL MAI" />
      <nav class="flex flex-col w-full text-center lg:text-left text-base mt-5">
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
