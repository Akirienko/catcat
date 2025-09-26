<script setup>
const userStore = useUserStore();

const currentFact = computed(() => userStore.currentFact || {});
const hasFactData = computed(() => currentFact.value && currentFact.value.fact);
</script>

<template>
  <section class="py-6">
    <div class="main-container max-w-[2000px]">
      <div class="mb-12">
        <NuxtLink to="/facts" class="flex items-center dark:text-[#D3D3D3] text-light-black cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Back</p>
        </NuxtLink>
      </div>

      <ClientOnly>
        <div v-if="hasFactData" class="m-auto max-w-[854px]">
          <img :src="currentFact.image" alt="cat image" class="mb-11">
          <p class="dark:text-white">{{ currentFact.fact }}</p>
        </div>

        <div v-else class="m-auto max-w-[854px] text-center">
          <p class="dark:text-white text-lg mb-4">Факт не найден</p>
          <NuxtLink to="/facts" class="text-blue-600 hover:text-blue-800">
            Вернуться к фактам
          </NuxtLink>
        </div>

        <template #fallback>
          <div class="m-auto max-w-[854px] text-center">
            <div class="animate-pulse">
              <div class="bg-gray-300 dark:bg-gray-700 h-64 rounded mb-11"></div>
              <div class="bg-gray-300 dark:bg-gray-700 h-4 rounded w-3/4"></div>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </section>

  <Footer />
</template>

<style lang="scss" scoped>

</style>