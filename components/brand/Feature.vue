<template>
  <div class="flex flex-col items-left mt-8">
    <div class="flex justify-left py-2 items-center gap-4">
      <slot name="icon"></slot>
      <h3 class="text-white">{{ title }}</h3>
    </div>
    <p class="max-w-sm text-white text-lg">
      <slot />
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
h3 {
  font-size: 18px;
  font-weight: 600;
}

p {
  margin: 20px 0;
}

img {
  object-fit: cover;
}
</style>
