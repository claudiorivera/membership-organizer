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
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" />
		{/if}
		<span>
			<small>Signed in as</small><br />
			<strong
				>{$page.data.session.user?.email ??
					$page.data.session.user?.name}</strong
			>
		</span>
		<a href="/auth/signout" class="button" data-sveltekit-preload-data="off"
			>Sign out</a
		>
	{:else}
		<span>You are not signed in</span>
		<a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a>
	{/if}
	<slot />
</main>
