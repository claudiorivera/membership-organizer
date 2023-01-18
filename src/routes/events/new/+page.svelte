<script lang="ts">
	import { title } from "process";
	import type { ActionData } from "./$types";
	export let form: ActionData;
</script>

<div class="p-4">
	<h1 class="text-xl font-semibold pb-3">Event</h1>
	{#if form?.formErrors}
		<div>
			{#each form.formErrors as error}
				<div class="text-red-500">{error}</div>
			{/each}
		</div>
	{/if}
	<form method="POST" class="flex flex-col">
		<label>
			Title
			<input name="title" type="text" />
			{#if form?.fieldErrors.title}
				<div class="text-red-500">{form.fieldErrors.title}</div>
			{/if}
		</label>
		<label>
			Description
			<textarea name="description" />
			{#if form?.fieldErrors.description}
				<div class="text-red-500">{form.fieldErrors.description}</div>
			{/if}
		</label>
		<button>Submit</button>
	</form>
</div>
