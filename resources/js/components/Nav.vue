<style scoped>
	nav{
		height: 40px;
	}
	nav div{
		display: inline-block;
	}
	.locales-btn{
		float:right;
	}
	.locales-btn .active{
		font-weight: bold;
		color: green;
	}
</style>

<template>
	<nav>
		<div>
			{{$t('title')}}
		</div>
		<div class="locales-btn">
			<select v-model="locale">
		      <option>th</option>
		      <option>en</option>
		    </select>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				locale: this.$i18n.locale
			}
		},
		watch: {
			locale(val){
				$cookies.set('locale', val)
				location.reload()
			}
		}
	}
</script>

