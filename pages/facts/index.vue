<script setup>
import {generateRandomId} from '~/utils/index.js'

const { isLoading, fetchFacts, error } = useCatFacts()
const userStore = useUserStore();

const facts = ref([])
const currentPage = ref(1)
const hasMoreFacts = ref(true)
const searchQuery = ref('')
const filterType = ref('all')
const isDropdownOpen = ref(false)

onMounted(async () => {
  const data = await fetchFacts(10, 1)

  if (data) {
    const factsWithIndex = data.map((fact, index) => ({
      ...fact,
      id: generateRandomId(7),
      image: getCatImage(index)
    }))

    facts.value = factsWithIndex

    if (data.length < 10) {
      hasMoreFacts.value = false
    }
  }
})

const filterOptions = [
  { value: 'all', label: 'All facts' },
  { value: 'long-first', label: 'Show long first' },
  { value: 'short-first', label: 'Show short first' },
  { value: 'short', label: 'Short only' },
  { value: 'long', label: 'Long only' }
]

const filteredFacts = computed(() => {
  let result = facts.value

  if (searchQuery.value.trim()) {
    result = result.filter(fact =>
      fact.fact.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  switch (filterType.value) {
    case 'short':
      result = result.filter(fact => fact.fact.length <= 100)
      break
    case 'long':
      result = result.filter(fact => fact.fact.length > 100)
      break
    case 'short-first':
      result = [...result].sort((a, b) => a.fact.length - b.fact.length)
      break
    case 'long-first':
      result = [...result].sort((a, b) => b.fact.length - a.fact.length)
      break
    case 'all':
    default:
      break
  }

  return result
})

const getCatImage = (index) => {
  const imageIndex = (index % 9) + 1
  return `/cats/cat${imageIndex}.webp`
}

const loadMoreFacts = async () => {
  if (isLoading.value) return

  currentPage.value += 1
  const newData = await fetchFacts(10, currentPage.value)

  if (newData && newData.length > 0) {
    const factsWithIndex = newData.map((fact, index) => ({
      ...fact,
      id: generateRandomId(7),
      image: getCatImage(index)
    }))

    facts.value = [...facts.value, ...factsWithIndex]

    if (newData.length < 10) {
      hasMoreFacts.value = false
    }
  } else {
    hasMoreFacts.value = false
  }
}



const openFact = (fact) => {
  userStore.setCurrentFact(fact)

  navigateTo(`/facts/fact/${fact.id}`)
}


</script>


<template>
  <section class="py-12">
    <div class="main-container max-w-[2000px]">
      <h1 class="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Facts About Cats To Share With Kids!
      </h1>
      <div class="flex items-center justify-around mb-8">

        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-light-black dark:text-[#E2E2E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search facts here"
            class="w-80 pl-12 pr-4 h-12 bg-[#EBECFF] dark:bg-[#4D4E69] border-none rounded-md text-gray-900 dark:text-white placeholder-[#A9A9A9] dark:placeholder-[#E2E2E2]"
          />
        </div>

        <div class="relative">
          <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="flex items-center justify-between w-64 px-4 py-3 bg-[#EBECFF] dark:bg-[#4D4E69] text-gray-700 dark:text-white rounded-md"
          >
            <div class="flex items-center">
              <span class="mr-2">{{ filterOptions.find(opt => opt.value === filterType)?.icon }}</span>
              <span>{{ filterOptions.find(opt => opt.value === filterType)?.label }}</span>
            </div>
            <svg
              class="w-5 h-5 transition-transform duration-200 dark:text-white"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div
            v-show="isDropdownOpen"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
          >
            <div
              v-for="option in filterOptions"
              :key="option.value"
              @click="filterType = option.value; isDropdownOpen = false"
              class="flex items-center bg-light-header-bg dark:bg-[#4D4E69] px-4 py-3 hover:bg-[#D6D8FF] dark:hover:bg-[#313247] cursor-pointer transition-colors duration-150"
            >
              <span class="flex-1 dark:text-[#E2E2E2]" :class="{ 'text-[#6E72EC] dark:text-white': filterType === option.value }">{{ option.label }}</span>
              <svg
                v-if="filterType === option.value"
                class="w-5 h-5 text-blue-600 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <LoadingPost v-if="isLoading && facts.length === 0" />

      <div v-else-if="error && facts.length === 0" class="text-center">
        <p class="text-red text-lg">Type of error:{{ error }}</p>
        <p class="text-red text-lg">Please try again later.</p>
      </div>

      <div v-else-if="facts.length > 0 && filteredFacts.length === 0" class="text-center py-12">
        <div class="max-w-md mx-auto">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">No facts found</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            No cat facts match your search for "<span class="font-semibold">{{ searchQuery }}</span>"
          </p>
          <MainButton
            @click="searchQuery = ''"
            button-name="Clear search"
          />
        </div>
      </div>


      <div v-if="filteredFacts.length" class="flex items-stretch justify-center gap-8 flex-wrap">
        <div
          @click="openFact(fact)"
          v-for="(fact, index) in filteredFacts"
          :key="index"
          class="bg-transparent dark:bg-gray-800 max-w-[411px] rounded-md overflow-hidden hover:bg-light-header-bg dark:hover:bg-dark-user-info transition-all duration-300"
        >

          <div class="relative h-64 overflow-hidden">
            <img
              :src="fact.image"
              :alt="`Cat fact image`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div class="p-8">
            <p
              :class="fact.fact.length > 100 ? 'font-[400]' : 'font-[700]'"
              class="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6 line-height-loose"

            >{{ fact.fact }}</p>
          </div>
        </div>
      </div>

      <div v-if="facts.length && hasMoreFacts && !searchQuery.trim()" class="flex flex-col items-center justify-center mt-12">
        <MainButton
          v-if="!isLoading"
          @click="loadMoreFacts"
          look="primary"
          :button-name="isLoading ? 'Loading...' : 'Load more facts'"
          :disabled="isLoading"
          :custom-class="isLoading ? 'opacity-50 cursor-not-allowed' : ''"
        />

        <LoadingPost v-if="isLoading && facts.length > 1" />
      </div>
    </div>
  </section>

  <Footer />
</template>

<style lang="scss" scoped>

</style>