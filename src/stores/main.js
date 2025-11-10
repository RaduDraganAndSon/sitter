import { defineStore } from 'pinia'

export const useCounterStore = defineStore('mainStore', {
  state: () => ({
    landing: "title",
  }),
  actions: {
    getSEO() {
      return this.landing
    }
  },
})

