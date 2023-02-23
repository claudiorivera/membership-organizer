<script>
	import "../app.postcss";
	import { page } from "$app/stores";

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/locations", label: "Locations" },
	];
</script>

<nav
	class="p-4 text-sky-200 font-bold text-xl bg-sky-700 shadow-md flex justify-between"
>
	<ul class="flex gap-4">
		{#each links as link}
			<li>
				<a
					class="hover:text-white"
					href={link.href}
					class:text-sky-100={$page.url.pathname === link.href}>{link.label}</a
				>
			</li>
		{/each}
	</ul>
	<div class="hover:text-white">
		{#if $page.data.session}
			<a href="/auth/signout" class="button" data-sveltekit-preload-data="off"
				>Sign Out</a
			>
		{:else}
			<a href="/auth/signin" data-sveltekit-preload-data="off">Sign In</a>
		{/if}
	</div>
</nav>

<main class="max-w-md mx-auto">
	<slot />
</main>
