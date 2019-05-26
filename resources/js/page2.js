import Vue from 'vue'
import i18n from './i18n.js'
import App from './components/Page2'

Vue.config.productionTip = false

new Vue({
	i18n,
	el: '#app',
	render: h => h(App)
})