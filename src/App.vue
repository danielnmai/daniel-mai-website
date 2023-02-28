<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="leading-normal max-h-screen mt-10">
    <!-- <img
      alt="Vue logo"
      class="block mt-0 mx-auto mb-8 w-[125px] h-[125px] p-1"
      src="@/assets/logo.svg"
    /> -->

    <div>
      <HelloWorld msg="Daniel Mai" />
      <nav class="w-full text-center">
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

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
