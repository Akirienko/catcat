<script setup>
const userStore = useUserStore();

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
      <div class="m-auto max-w-[854px]">
        <img :src="userStore.currentFact.image" alt="cat image" class="mb-11">

        <p class="dark:text-white">{{ userStore.currentFact.fact }}</p>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style lang="scss" scoped>

</style>