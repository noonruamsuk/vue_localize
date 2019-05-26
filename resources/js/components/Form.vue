<template>
	<form action="" method="post">
		<div>
			<label>{{$t('form-email')}}</label>
			<input type="text" name="">
		</div>
		<input type="hidden" name="_token" :value="csrfToken">
		<button type="submit">submit</button>
	</form>
</template>

<script>
	export default {
		props: {
			csrfToken: {
				type: String,
				required: true
			}
		}
	}
</script>