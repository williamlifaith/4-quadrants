/* eslint-disable no-redeclare,indent,no-unused-vars */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

let lang = navigator.language // figure out user language

export default new VueI18n({
  locale: lang,
  // this.$i18n.locale //
  messages:
    {
      'zh-CN':
        require('../lang/zh'), // Chinese
      'en-US':
        require('../lang/en'), // English
      'ko-KR':
        require('../lang/ko')// Korean
    }

})
