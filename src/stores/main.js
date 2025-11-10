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
    ],
    social: {
      substack: "https://substack.com/@dragonandtheson",
      instagram: "https://www.instagram.com/dragon_and_son/",
      github: "https://github.com/RaduDraganAndSon",
    },
    socialShow: {
      substack: true,
      instagram:  true,
      github:  true,
    },
    contactInfo: {
      email: "H3s9d@example.com",
      location: "Eindhoven, Netherlands",
      phone: "+31 6 12345678",
    }
  }),
  actions: {
    getSEO() {
      return this.landing
    }
  },
})

