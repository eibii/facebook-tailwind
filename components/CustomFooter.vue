<template>
<div class="bg-white py-8">
  <div class="hidden md:block custom-container text-xs font-normal text-gray-400">
    <nav class="flex  flex-wrap space-x-5">
      <span v-for="(item, i) in props.languages" :key="i">
        <a :class="item.active ? 'justify-self-auto text-gray-500' : 'justify-self-auto hover:underline'" :href="item.link">{{ item.title }}</a>
      </span>
      <span>
        <button class="bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 text-gray-500 px-3 text-sm">+</button>
      </span>
    </nav>
    <hr class="my-2">
    <nav class="flex flex-wrap mb-4 leading-5">
      <span v-for="(item, i) in props.menus" :key="i">
        <a class="mr-5 justify-self-auto hover:underline" :href="item.link">{{ item.title }}</a>
      </span>
    </nav>
    <p>Meta © 2022</p>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  languages: Array,
  menus: Array,
})
</script>