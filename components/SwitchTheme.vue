<script setup>

const isDark = ref(false)

onMounted(() => {
  if (process.client) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = systemDark

    updateTheme()
  }
})

const updateTheme = () => {
  if (process.client) {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

</script>

<template>
  <div class="flex items-center">
    <button
      @click="toggleTheme"
      :class="[
        'relative inline-flex h-[37px] w-20 items-center rounded-full transition-colors duration-500 ease-in-out',
        isDark ? 'bg-gray-700' : 'bg-white'
      ]"
    >
        <img v-show="!isDark" class="absolute right-2 w-7 h-7" src="@/assets/image/sun.webp" alt="Sun Icon">
        <img v-show="isDark" class="absolute left-1 w-9 h-9" src="@/assets/image/moon.webp" alt="Moon Icon">
      <span
        :class="[
          'flex h-8 w-8 transform rounded-full bg-[#888888] shadow-lg transition-transform duration-500 ease-in-out items-center justify-center',
          isDark ? 'translate-x-11' : 'translate-x-1'
        ]"
      >
      </span>
    </button>
  </div>
</template>

<style scoped>

</style>