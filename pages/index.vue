<template>
  <main class="mt-32 text-yellow-400">
    <BrandHero />
    <div class="flex justify-center flex-wrap gap-8 mt-16">
      <BrandFeature title="Chodzież i nie tylko!"
        ><template #icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg> </template
        >Chcesz jechać na lotnisko, na dworzec PKP, do Poznania, Bydgoszczy,
        Piły, Wągrowca czy Szamocina? Gdzie tylko Chcesz. Zawieziemy,
        przywieziemy. Pomożemy.</BrandFeature
      >
      <BrandFeature title="Elastyczność"
        ><template #icon
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
        Chcesz jechać na imprezę, wesele, urodziny, do znajomych? Zadzwoń -
        zawieziemy, odbierzemy z imprezy o każdej porze. Jesteśmy dla Ciebie
        <strong>24h/7</strong>. Masz sprawę w urzędzie, wizytę u lekarza?
        Zawieziemy, <strong>poczekamy</strong>, odwieziemy.</BrandFeature
      >
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
