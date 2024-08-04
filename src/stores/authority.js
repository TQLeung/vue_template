import { ref, reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthorityStore = defineStore('authority', () => {
  const loginedToken = ref('clear')
  // const isLogined = () => {
  //   console.log('check isLogined', loginedUser.id)
  //   loginedUser.account_id != null
  // }
  // watch(loginedUser, (new, old) => {
  //   console.log('new', new.id)
  // })
  return { loginedToken }
}, {
  persist: true
})
