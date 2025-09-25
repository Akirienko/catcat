<script setup>
import { useUserStore } from '@/stores/user'
import LoadingPost from '~/components/LoadingPost.vue'

const userStore = useUserStore()

const { isLoading, fetchFacts, error } = useCatFacts()

const facts = ref([])
const currentPage = ref(1)
const hasMoreFacts = ref(true)

const getCatImage = (index) => {
  const imageIndex = (index % 9) + 1
  return `/cats/cat${imageIndex}.webp`
}


const loadMoreFacts = async () => {
  if (isLoading.value) return

  currentPage.value += 1
  const newData = await fetchFacts(10, currentPage.value)

  if (newData && newData.length > 0) {

    facts.value = [...facts.value, ...newData]

    if (newData.length < 10) {
      hasMoreFacts.value = false
    }
  } else {
    hasMoreFacts.value = false
  }
}

onMounted(async () => {
  const data = await fetchFacts(10, 1)
  console.log(data);

  if (data) {
    facts.value = data

    if (data.length < 10) {
      hasMoreFacts.value = false
    }
  }
})

</script>


<template>
  <section class="py-12">
    <div class="main-container max-w-[2000px]">
      <h1 class="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Facts About Cats To Share With Kids!
      </h1>

      <div class="">
        <div class="">
          
        </div>

        <div class=""></div>
      </div>

      <LoadingPost v-if="isLoading && facts.length === 0" />

      <div v-else-if="error && facts.length === 0" class="text-center">
        <p class="text-red text-lg">Type of error:{{ error }}</p>
        <p class="text-red text-lg">Please try again later.</p>
      </div>


      <div v-if="facts.length" class="flex items-stretch justify-center gap-8 flex-wrap">
        <div
          v-for="(fact, index) in facts"
          :key="index"
          class="bg-transparent dark:bg-gray-800 max-w-[411px] rounded-md overflow-hidden hover:bg-light-header-bg dark:hover:bg-dark-user-info transition-all duration-300"
        >

          <div class="relative h-64 overflow-hidden">
            <img
              :src="getCatImage(index)"
              :alt="`Cat ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div class="p-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Cat Fact #{{ index + 1 }}
            </h3>
            <p
              :class="fact.fact.length > 100 ? 'font-[400]' : 'font-[700]'"
              class="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6 line-height-loose"
            >
              {{ fact.fact.length > 100 ? fact.fact.substring(0, 100) + '...' : fact.fact }}
            </p>
            <!-- <div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Length: {{ fact.length }} characters</span>
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Fun Fact
              </span>
            </div> -->
          </div>
        </div>
      </div>

      <div v-if="facts.length && hasMoreFacts" class="flex flex-col items-center justify-center mt-12">
        <MainButton
          v-if="!isLoading"
          @click="loadMoreFacts"
          look="primary"
          :button-name="isLoading ? 'Loading...' : 'Load more facts'"
          :disabled="isLoading"
          :custom-class="isLoading ? 'opacity-50 cursor-not-allowed' : ''"
        />

        <LoadingPost v-if="isLoading && facts.length >1" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>