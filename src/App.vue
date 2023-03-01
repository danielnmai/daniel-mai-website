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
      <Headline title="Daniel Mai" />
      <nav class="w-full text-center lg:text-left text-base mt-5">
        <RouterLink class="inline-block px-5" to="/">Home</RouterLink>
        <RouterLink
          class="inline-block px-5 border-solid border-l-2 border-[--color-border]"
          to="/about"
          >About
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
