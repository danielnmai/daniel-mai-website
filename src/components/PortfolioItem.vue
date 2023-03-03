<script setup lang="ts">
defineProps<{
  imgURL?: string;
}>();
</script>

<template>
  <div>
    <h3>
      <slot name="heading"></slot>
    </h3>
    <img />
    <p>
      <slot name="details"></slot>
    </p>
  </div>
</template>
