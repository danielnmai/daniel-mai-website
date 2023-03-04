<script setup lang="ts">
defineProps<{
  imgURL?: string;
  href?: string;
}>();
</script>

<template>
  <div class="mb-8">
    <a class="font-bold w-max" target="_blank" rel="noopener">
      <slot name="heading"></slot>
    </a>
    <slot name="photo"></slot>
    <p>
      <slot name="details"></slot>
    </p>
  </div>
</template>
