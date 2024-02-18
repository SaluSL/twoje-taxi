<template>
  <div class="w-full text-center">
    <h1 class="text-center text-6xl font-semibold">
      Twoje Taxi <span class="text-white">24h/7</span>
    </h1>
    <br />
    <h2 class="text-center text-4xl font-semibold mb-6 mt-2">
      Chodzież i okolice
    </h2>
    <br />
    <label
      for="big-cta"
      class="text-center text-4xl font-semibold mt-2 text-white"
    >
      Zadzwoń pod numer:
    </label>
    <div class="flex flex-col justify-center items-center mt-6">
      <a
        id="big-cta"
        href="tel:+48508978240"
        class="hover:bg-yellow-600 text-4xl md:text-6xl px-2 py-1 border rounded-xl flex items-center gap-2 w-fit bg-yellow-400 text-gray-900 justify-center"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 group-hover:animate-bounce text-gray-900"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clip-rule="evenodd"
          /></svg
        ><span class="text-gray-900">508 978 240</span></a
      >
      <div
        class="flex flex-wrap gap-16 mt-16 md:mt-32 items-center justify-center md:px-4"
      >
        <blockquote class="text-3xl italic font-semibold text-white">
          <svg
            class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path
              d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
            />
          </svg>
          <p>
            "Twoje Taxi - Twój Anioł Stróż" <br />
            Rano, wieczorem, w dzień i po nocy <br />
            jesteśmy Tobie do pomocy.
          </p>
        </blockquote>
        <img
          src="/taxi-banner.jpeg"
          class="rounded-xl"
          alt="Żółta taksówka ze znakiem TAXI na dachu, jadąca tunelem. Napis na zdjęciu: „Twoje Taxi - Twój Anioł Stróż Rano, wieczorem, w dzień i po nocy jesteśmy Tobie do pomocy. 24h/7 508-978-240”"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  width: 800px;
  height: auto;
}
</style>
