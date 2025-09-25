export default defineNuxtRouteMiddleware((to) => {

  if (to.path === '/facts' || to.path === '/fact') {

    if (process.client) {
      try {
        const userStore = useUserStore()
        if (!userStore.isUser) {
          return navigateTo('/login')
        }
      } catch (error) {
        const isUser = localStorage.getItem('isUser')
        if (!isUser) {
          return navigateTo('/login')
        }
      }
    }

  }

})