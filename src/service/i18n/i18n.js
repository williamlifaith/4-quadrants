/* eslint-disable no-redeclare,indent,no-unused-vars */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import {LANG_EN, LANG_CN, LANG_KO} from '../../components'

Vue.use(VueI18n)

let lang = navigator.language // figure out user language

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
