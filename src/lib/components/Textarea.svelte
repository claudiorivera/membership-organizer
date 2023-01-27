<script lang="ts">
	import { clsx } from "clsx";

	export let label: string;
	export let errors: Array<string> | undefined;
	export let name: string;
</script>

<label class="flex">
	<span class="w-1/4">{label}</span>
	<div class="flex flex-col flex-grow">
		<textarea
			{name}
			rows={5}
			class={clsx("rounded", {
				"border-red-500": errors,
			})}
		/>
		{#if errors}
			<span class="text-red-500 text-xs">{errors}</span>
		{/if}
	</div>
</label>
