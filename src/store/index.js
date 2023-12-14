import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      beginner: {
        unit1: [
          {
            id: 1,
            key: "n",
            text_uz: "aerobika",
            text_en: "aerobics",
            description: "She does aerobics once or twice a week.",
            options: [
              "test1",
              "test2",
              "test3",
              "test4",
            ]
          },
          {
            id: 2,
            key: "n",
            text_uz: "blog",
            text_en: "blog",
            description: "Would you like to write a blog about your daily life?",
            options: [
              "test1",
              "test2",
              "test3",
              "test4",
            ]
          },
          {
            id: 3,
            key: "adj",
            text_uz: "band",
            text_en: "busy",
            description: "My life is too busy.",
            options: [
              "test1",
              "test2",
              "test3",
              "test4",
            ]
          },
          {
            id: 4,
            key: "n",
            text_uz: "tabiatga sayr",
            text_en: "camping",
            description: "We usually go camping in the summer.",
            options: [
              "test1",
              "test2",
              "test3",
              "test4",
            ]
          },
          {
            id: 5,
            key: "n",
            text_uz: "qarta",
            text_en: "cards",
            description: " Marta and Felix often play cards together.",
            options: [
              "test1",
              "test2",
              "test3",
              "test4",
            ]
          }
        ]
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
