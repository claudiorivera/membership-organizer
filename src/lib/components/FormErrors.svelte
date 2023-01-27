<script lang="ts">
	export let errors: Array<string> | undefined;
</script>

{#if errors}
	<div>
		{#each errors as error}
			<div class="text-red-500">{error}</div>
		{/each}
	</div>
{/if}
