import Vue from 'vue'
import i18n from './i18n.js'
import Form from './components/Form'

Vue.config.productionTip = false

new Vue({
	i18n,
	el: '#app',
	components: {
		'v-form': Form
	}
})