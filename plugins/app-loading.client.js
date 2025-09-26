export default defineNuxtPlugin({
  name: 'app-loading',
  async setup() {
    const loadingStore = useLoadingStore()

    if (process.client) {
      await loadingStore.initializeApp()
    }
  }
})