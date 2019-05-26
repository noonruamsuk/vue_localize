import Vue from 'vue'
import i18n from './i18n.js'

import App from './components/Nav'

Vue.config.productionTip = false

new Vue({
	i18n,
	el: '#nav',
	render: h => h(App)
})