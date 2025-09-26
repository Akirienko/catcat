// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const useUserStore = defineStore('user', () => {
//   const userNameCat = ref('');
//   const isUser = ref(false);

//   function login(userName) {
//     localStorage.setItem('userNameCat', userName);
//     localStorage.setItem('isUser', true);

//     userNameCat.value = userName;
//     isUser.value = true;
//   }

//   function logout() {
//     localStorage.removeItem('userNameCat');
//     localStorage.setItem('isUser', false);

//     userNameCat.value = '';
//     isUser.value = false;
//   }

//   return {
//     userNameCat,
//     isUser,
//     login,
//     logout
//   };
// });

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userNameCat: ref(''),
    isUser: ref(false),
    currentFact: null,
  }),
  actions: {
    login(userName) {
      this.userNameCat = userName;
      this.isUser = true;
    },
    logout() {
      this.userNameCat = '';
      this.isUser = false;
    },
    setCurrentFact(fact) {
      this.currentFact = fact
    }
  },
  persist: true
})