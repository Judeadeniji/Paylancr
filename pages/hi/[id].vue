<script setup lang="ts">
const route = useRoute();
const user = useUserStore();
const name = route.params.id;

watchEffect(() => {
  user.setNewName(route.params.id as string);
});

definePageMeta({
  layout: 'home',
});
</script>

<template>
  <div>
    <div
      class="i-twemoji:waving-hand text-4xl inline-block animate-shake-x animate-duration-5000"
    />
    <h3 class="text-2xl font-500">Hi,</h3>
    <div class="text-xl">{{ name }}!</div>

    <template v-if="user.otherNames.length">
      <div class="text-sm my-4">
        <span class="op-50">Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <Counter />

    <div>
      <NuxtLink class="btn m-3 text-sm" to="/"> Back </NuxtLink>
    </div>
  </div>
</template>
