<script lang="ts">
	import { clsx } from "clsx";
	import Errors from "./Errors.svelte";

	export let label: string;
	export let errors: Array<string> | undefined;
	export let name: string;
	export let value: string | undefined | null = "";
</script>

<label class="flex">
	<span class="w-1/4">{label}</span>
	<div class="flex flex-col flex-grow">
		<textarea
			{name}
			{value}
			rows={5}
			class={clsx("rounded", {
				"border-red-500": errors,
			})}
		/>

		<Errors {errors} />
	</div>
</label>
