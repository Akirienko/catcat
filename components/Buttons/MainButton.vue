<script setup>

const props = defineProps({
  buttonName: {
    type: String,
    default: 'Login'
  },
  type: {
    type: String,
    default: 'button'
  },
  link: {
    type: String,
    default: null
  },
  look: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  customClass: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['click']);

const buttonClasses = computed(() => {
  const baseClasses = 'px-4 py-2 rounded-lg border-2 transition-all duration-200 font-[600]'

  if (props.look === 'primary') {
    return `${baseClasses} text-[#6E72EC] border-[#6E72EC] bg-transparent dark:text-[#A8ABFF] dark:border-[#A8ABFF] hover:bg-[#6E72EC] hover:text-white dark:hover:bg-[#A8ABFF] dark:hover:text-gray-900`
  } else {
    return `${baseClasses} text-white bg-[#6E72EC] border-[#6E72EC] dark:bg-[#8588EF] dark:border-[#8588EF] hover:bg-[#5A5EE0] dark:hover:bg-[#7275EB]`
  }
})

</script>

<template>
  <NuxtLink
    v-if="type==='link'"
    :to="link"
    :class="[buttonClasses, customClass]"
  >
    {{ buttonName }}
  </NuxtLink>

  <button
    v-else
    :class="[buttonClasses, customClass]"
    @click="emits('click')"
  >
    {{ buttonName }}
  </button>
</template>

<style lang="scss" scoped>

</style>