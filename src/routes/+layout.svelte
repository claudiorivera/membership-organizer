<script>
	import "../app.postcss";
	import { page } from "$app/stores";

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/locations", label: "Locations" },
	];
</script>

<nav class="p-4 bg-sky-700 shadow-md">
	<ul class="flex gap-4">
		{#each links as link}
			<li>
				<a
					href={link.href}
					class="hover:text-sky-200 text-sky-200 font-bold text-xl"
					class:text-white={$page.url.pathname === link.href}>{link.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<main class="max-w-md mx-auto">
	<slot />
</main>
