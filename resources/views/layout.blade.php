<!DOCTYPE html>
<html>
<head>
    <title>Project 1</title>
</head>
<body>
	@section('nav')
		<div id="nav"></div>
	@show

    @yield('content')


    <script type="text/javascript" src="/js/layout.js"></script>
    @yield('script')
</body>
</html>


