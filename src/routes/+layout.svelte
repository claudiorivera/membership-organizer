<script>
	import "../app.postcss";
</script>

<nav
	class="p-4 bg-sky-700 text-white font-bold text-xl shadow-md hover:text-sky-200"
>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav>

<main class="max-w-md mx-auto">
	<slot />
</main>
