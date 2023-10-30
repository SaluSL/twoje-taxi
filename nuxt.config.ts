// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      title: "Twoje Taxi Chodzież - taksówki w okolicach Chodzieży",
      htmlAttrs: {
        lang: "pl",
      },
      bodyAttrs: {
        style: "background-color: #1f2937",
      },
      meta: [
        {
          name: "description",
          content:
            "Twoje Taxi Chodzież - Taksówki w okolicach Chodzieży i nie tylko. Dostępność 24h/7.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/taxi-icon.svg",
        },
      ],
    },
  },
});
