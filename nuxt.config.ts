// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/api/**": {
      proxy: "https://dummyjson.com/**",
    },
  },
});
