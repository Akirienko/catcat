<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: String,
    default: ''
  },
  allowOnlyLetters: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})


const handleInput = (event) => {
  if (props.allowOnlyLetters) {
    const filteredValue = event.target.value.replace(/[^a-zA-Z]/g, '')
    if (filteredValue !== event.target.value) {
      event.target.value = filteredValue
      inputValue.value = filteredValue
    }
  }
}
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      class="block text-sm font-medium text-light-black dark:text-white mb-2"
    >
      {{ label }}
    </label>

    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :class="[
        'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none',
        'bg-[#EBECFF] dark:bg-[#4D4E69] text-light-black placeholder-[#A9A9A9] dark:placeholder-[#C4C4C4] dark:text-white',
        error
          ? 'border-red focus:border-red'
          : 'border-[#EBECFF] dark:border-[#4D4E69]'
      ]"
      @input="handleInput"
    />
    <p
      v-if="error"
      class="mt-0 text-red text-sm"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped>

</style>