<script setup>
useHead({
  title: 'Paylancr',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
});
</script>

<template>
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  overflow-y: scroll;
  /* overflow-x: hidden; */
}

html.dark {
  background: #222;
  color: white;
}
</style>
