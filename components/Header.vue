<script setup>
import {isFirstCharacterLetter} from '@/utils/index.js'
import MainButton from './Buttons/MainButton.vue';
const userStore = useUserStore();

const firstLetter = computed(() => isFirstCharacterLetter(userStore.userNameCat).toUpperCase());

const isUserDataPopup = ref(false);
const toggleUserMenu = () => {
  isUserDataPopup.value = !isUserDataPopup.value;
}

// Computed для перевірки користувача
const isUserLoggedIn = computed(() => userStore.isUser);

const logoutUser = () => {
  userStore.logout();
  isUserDataPopup.value = false;

  navigateTo('/');
}

</script>

<template>
  <header class="bg-light-header-bg dark:bg-dark-header-bg transition-all h-16 duration-500 fixed top-0 w-full z-50 xl:h-24">
    <div class="main-container max-w-[2000px] flex items-center justify-between h-full z-20 ">
      <div class="w-[185px]">
        <img src="/logo.webp" alt="logo">
      </div>

      <div class="flex items-center justify-center">
        <div>
          <SwitchTheme />
        </div>

        <div
          v-if="isUserLoggedIn"
          class="bg-blue ml-3.5 text-white w-14 h-14 rounded-full flex items-center justify-center font-[500] text-[31px] cursor-pointer"
          @click="toggleUserMenu"
        >
          {{ firstLetter }}
        </div>
      </div>
    </div>
<div
      class="absolute z-10 right-4 mt-2 p-2 w-48 bg-white dark:bg-dark-header-bg border-none rounded-md shadow-lg transition-all duration-500"
      :class="isUserDataPopup ? 'translate-x-2 opacity-100' : 'opacity-0 translate-x-56'"
      >
      <p class="text-base dark:text-white">User name: <span class="font-bold text-lg capitalize">{{ userStore.userNameCat }}</span></p>

      <MainButton
        custom-class="w-full mt-2"
        button-name="Logout"
        look="secondary"
        @click="logoutUser"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>