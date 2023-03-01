<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold lg:text-left">{{ title }}</h1>
    <h3 class="lg:text-left">Senior Software Engineer</h3>
  </div>
</template>
