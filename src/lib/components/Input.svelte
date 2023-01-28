<script lang="ts">
	import { clsx } from "clsx";

	export let label: string;
	export let errors: Array<string> | undefined;
	export let name: string;
	export let type: string = "text";
	export let value: string | null | undefined | Date = "";

	$: value =
		value instanceof Date
			? // https://stackoverflow.com/a/66558369/6520955
			  new Date(value.getTime() - value.getTimezoneOffset() * 60000)
					.toISOString()
					.slice(0, -1)
			: value;
</script>

<label class="flex">
	<span class="w-1/4">{label}</span>
	<div class="flex flex-col flex-grow">
		<input
			{type}
			{name}
			{value}
			class={clsx("rounded", {
				"border-red-500": errors,
			})}
		/>
		{#if errors}
			<span class="text-red-500 text-xs">{errors}</span>
		{/if}
	</div>
</label>
