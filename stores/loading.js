import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isAppLoading: true,
    isInitialized: false
  }),

  actions: {
    showLoading() {
      this.isAppLoading = true
    },

    hideLoading() {
      this.isAppLoading = false
      this.isInitialized = true
    },

    async initializeApp() {
      this.isAppLoading = true
      const minLoadingTime = 800
      const startTime = Date.now()

      try {
        // Тут можна додати додаткові ініціалізації
        // наприклад, перевірка теми, завантаження даних тощо
        await new Promise(resolve => {
          // Чекаємо поки DOM повністю завантажиться
          if (document.readyState === 'complete') {
            resolve()
          } else {
            window.addEventListener('load', resolve, { once: true })
          }
        })

        // Забезпечуємо мінімальний час показу
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, minLoadingTime - elapsed)

        if (remaining > 0) {
          await new Promise(resolve => setTimeout(resolve, remaining))
        }

      } finally {
        this.hideLoading()
      }
    }
  },

  getters: {
    // Геттер для зручності
    loading: (state) => state.isAppLoading
  }
})