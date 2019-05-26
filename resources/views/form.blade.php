@extends('layout')

@section('content')
<div id="app">
	<v-form
	csrf-token="{{csrf_token()}}">
	</v-form>
</div>
@endsection

@section('script')
	<script type="text/javascript" src="/js/form.js"></script>
@endsection