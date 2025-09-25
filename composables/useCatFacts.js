export const useCatFacts = () => {
  const isLoading = ref(false)
  const error = ref(null)


  const fetchFacts = async (limit = 10, page = 1) => {
    try {
      isLoading.value = true
      error.value = null

      const { data } = await $fetch('https://catfact.ninja/facts', {
        params: {
          limit,
          page
        }
      })

      return data
    } catch (err) {
      error.value = err.message || 'Failed to fetch cat facts'
      console.error('Error fetching cat facts:', err)
      return null
    } finally {
      isLoading.value = false
    }
  }


  return {
    isLoading,
    fetchFacts,
    error
  }
}