// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      title: "Twoje Taxi Chodzież",
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
            "Strona startowa firmy taksówkarskiej działającej w okolicach Chodzieży",
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
