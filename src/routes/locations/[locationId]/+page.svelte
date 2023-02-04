<script lang="ts">
	import Errors from "$lib/components/Errors.svelte";
	import Input from "$lib/components/Input.svelte";
	import type { ActionData, PageData } from "./$types";

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="p-4">
	<h1 class="text-xl font-semibold pb-3">Location Details</h1>

	<form method="POST" class="flex flex-col gap-4">
		<Errors errors={form?.formErrors} />

		<Input
			name="name"
			value={data.location?.name}
			label="Name"
			type="text"
			errors={form?.fieldErrors.name}
		/>

		<button
			class="hover:bg-sky-600 rounded px-4 py-2 font-semibold text-white bg-sky-700"
			>Submit</button
		>
	</form>
</div>
