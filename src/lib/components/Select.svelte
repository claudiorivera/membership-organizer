<script lang="ts">
	import { clsx } from "clsx";

	export let label: string;
	export let errors: Array<string> | undefined;
	export let name: string;
	export let options: Array<{ value: string; label: string }>;
</script>

<label class="flex">
	<span class="w-1/4">{label}</span>
	<div class="flex flex-col flex-grow">
		<select
			{name}
			class={clsx("rounded", {
				"border-red-500": errors,
			})}
		>
			<option selected disabled>Select an option</option>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
		{#if errors}
			<span class="text-red-500 text-xs">{errors}</span>
		{/if}
	</div>
</label>
