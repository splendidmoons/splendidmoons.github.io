import { main_store } from '~/store/main'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      store: main_store()
    }
  }
})
