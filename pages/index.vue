<template>
<main class="bg-white md:bg-gray-100 mt-2 md:pt-32 pb-40">
  <div class="custom-container">
    <div class="grid grid-cols-5 mx-auto md:mx-0 max-w-md md:max-w-none">
      <div class="flex justify-center md:block col-span-5 md:col-span-3 md:mt-20 md:pr-32">
        <img class="h-10 md:h-28 md:-m-8" src="@/assets/svg/logo.svg" alt="Logo">
        <p class="hidden md:block text-3xl font-SourceSansPro font-normal leading-8 mt-6">O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
      </div>
      <div class="col-span-5 md:col-span-2">
        <div class="bg-white md:rounded-lg md:shadow-xl p-2 md:p-4">
          <div class="flex flex-col">
            <input class="bg-gray-100 md:bg-white border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300 rounded-md px-4 py-3" v-model="login" type="text" placeholder="Email ou telefone">
            <input class="bg-gray-100 md:bg-white border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300 rounded-md px-4 py-3 mt-2 md:mt-4" v-model="password" type="password" placeholder="Senha">
            <button class="bg-primary hover:bg-primary-hover text-white text-sm md:text-lg rounded-md px-4 py-3 mt-2 md:mt-4 font-bold">Entrar</button>
            <div class="flex justify-center mt-4">
              <a class="text-primary text-center text-sm md:text-md hover:underline" href="#">Esqueceu a senha?</a>
            </div>
            <hr class="my-4">
            <div class="flex justify-center my-4">
              <button class="bg-secondary hover:bg-secondary-hover text-white text-sm md:text-lg rounded-md px-5 md:px-4 py-2 md:py-3 font-bold">Criar nova conta</button>
            </div>
          </div>
        </div>
        <p class="hidden md:block mt-6 font-normal text-sm text-center">
          <a class="font-bold hover:underline" href="#">Criar uma Página</a> para uma celebridade, uma marca ou uma empresa.
        </p>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
  definePageMeta({
    layout: 'home',
  })

  let login, password
</script>