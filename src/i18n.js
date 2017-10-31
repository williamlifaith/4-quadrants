import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// Ready translated locale messages
const messages = {
  zh: {
    message: {
      hello: '嗨，世界'
    }
  },
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}
export default new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
})
