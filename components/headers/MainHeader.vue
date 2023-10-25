<template>
  <header class="shadow-sm fixed w-full bg-gray-900">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/">
        <!-- <img
          id="planimbly-logo-dark"
          src="planimbly-white.svg"
          class="w-40 h-auto"
          alt="Logotyp marki planimbly"
        /> -->
        <BrandLogo />
      </NuxtLink>
      <ul class="flex gap-4 justify-center items-center">
        <li>
          <button
            class="flex gap-3 py-2 px-4 bg-yellow-400 rounded-md font-medium text-sm items-center group text-gray-900 hover:bg-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            Zadzwoń teraz
          </button>
          <!-- <UButton
            icon="i-heroicons-phone-solid"
            label="Zadzwoń teraz"
            size="md"
            to="/schedule"
          /> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped></style>
