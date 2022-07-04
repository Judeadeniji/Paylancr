<script setup lang="ts">
const name = ref('');

const router = useRouter();
const go = () => {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`);
  }
};
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="off"
      class="text-center bg-transparent outline-none active:outline-none dark:gray-700 px-4 py-2 mt-5 w-250px border rounded border-gray-200"
      @keydown.enter="go"
    />
    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">GO</button>
    </div>
  </div>
</template>
