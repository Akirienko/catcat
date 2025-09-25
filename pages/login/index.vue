<script setup>
import { isValidLengthName } from '@/utils/index.js'

const userName = ref('')
const nameError = ref('')

const handleNameChange = () => {
  nameError.value = isValidLengthName(userName.value) || ''
}

const sendUserData = () => {
  const validationError = isValidLengthName(userName.value)

  if (validationError) {
    nameError.value = validationError
  } else {
    nameError.value = ''
    localStorage.setItem('userNameCat', userName.value)
    window.location.href = '/facts'
  }
}

watch(userName, handleNameChange)
</script>

<template>
  <section class="h-full flex items-center justify-center">
    <div class="main-container max-w-[410px] w-full">

        <h1 class="text-2xl font-bold text-center text-black dark:text-white mb-12">Login</h1>

        <MainInput
          v-model="userName"
          label="Name"
          type="text"
          placeholder="Enter user name"
          :error="nameError"
          :allow-only-letters="true"
        />

        <div class="flex items-center justify-center">
          <MainButton @click="sendUserData" button-name="Login" look="secondary" custom-class="w-full mt-12 w-[224px] h-12" />
        </div>
      </div>

  </section>
</template>

<style lang="scss" scoped>

</style>