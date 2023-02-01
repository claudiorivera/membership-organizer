<script lang="ts">
	export let errors: Array<string> | undefined;
</script>

{#if errors}
	<div>
		{#each errors as error}
			<span class="text-red-500 text-xs">{error}</span>
		{/each}
	</div>
{/if}
