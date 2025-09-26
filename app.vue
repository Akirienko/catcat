<script setup>
const loadingStore = useLoadingStore()

</script>


<template>

  <AppLoading v-if="loadingStore.isAppLoading" />
  <div class="min-h-screen bg-white dark:bg-dark-background transition-all duration-500 flex flex-col">
    <Header />
    <main class="font-hind mt-16 xl:mt-24 h-screen-minus-header xl:h-screen-minus-header-xl overflow-y-auto">
      <NuxtPage />
    </main>

  </div>
</template>

