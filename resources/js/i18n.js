import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'

Vue.use(VueI18n)
Vue.use(VueCookies)

VueCookies.config('1y')

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: VueCookies.get('locale') || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})