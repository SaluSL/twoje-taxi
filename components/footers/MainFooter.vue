import type { button } from '@nuxt/ui/dist/runtime/ui.config';
<template>
  <footer class="border-t border-gray-500 container mx-auto p-4 mt-32">
    <div class="flex justify-between gap-16">
      <span class="whitespace-nowrap text-gray-200">
        Twoje Taxi Chodzież &copy {{ currYear() }}
      </span>
      <nav>
        <ul class="flex flex-col gap-2">
          <li>
            <!-- <UButton label="Strona główna" size="sm" variant="link" to="/" /> -->
            <a class="text-blue-200 underline">Strona główna </a>
          </li>
          <li>
            <!-- <UButton label="Kontakt" size="md" variant="link" to="/contact" /> -->
            <a class="text-blue-200 underline">Zadzwoń teraz</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const currYear = () => {
  return new Date().getFullYear();
};
</script>

<style scoped></style>
