import { defineStore } from 'pinia'

export const useCounterStore = defineStore('mainStore', {
  state: () => ({
    landing: {
      hero: "Under construction",
      title: "We are Dragon and Son",
      description: "A custom shop from Eindhoven, Netherlands. We make a loft of cool stuff. And this is our place to showcase it to you. If you see anything you like, just get in touch! We do not bite even though we are dragons.",
    },
    articles: [
      {title: "article 1", content: "content 1"},
      {title: "article 2", content: "content 3"},
    ]
  }),
  actions: {
    getSEO() {
      return this.landing
    }
  },
})

