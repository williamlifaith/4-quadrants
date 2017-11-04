/* eslint-disable no-redeclare,indent,no-unused-vars */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import {LANG_ZH, LANG_KR, LANG_EN} from '../lang/index'
import {LANG_EN} from '../components/first-page/en'
import {LANG_CN} from '../components/first-page/cn'
import {LANG_KO} from '../components/first-page/ko'
// import {LANG_ZH, LANG_KR, LANG_EN} from '../first-page/index.js'

Vue.use(VueI18n)

let lang = navigator.language // figure out user language

// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、世界'
//     }
//   }
// }

// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、世界'
//     }
//   }
// }

export default new VueI18n({
  locale: lang,
  // this.$i18n.locale //
  messages:
    {
      'en-US': LANG_EN,  // English
      'zh-CN': LANG_CN, // Chinese
      'ko-KR': LANG_KO  // Korean
    }

})
