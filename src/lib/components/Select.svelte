<script lang="ts">
	import { clsx } from "clsx";
	import Errors from "./Errors.svelte";

	export let label: string;
	export let errors: Array<string> | undefined;
	export let name: string;
	export let options: Array<{ value: string; label: string }>;
	export let value: string = "";
</script>

<label class="flex">
	<span class="w-1/4">{label}</span>
	<div class="flex flex-col flex-grow">
		<select
			{name}
			{value}
			class={clsx("rounded", {
				"border-red-500": errors,
			})}
		>
			<option selected disabled>Select an option</option>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>

		<Errors {errors} />
	</div>
</label>
