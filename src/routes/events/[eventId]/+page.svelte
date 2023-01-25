<script lang="ts">
	import type { ActionData, PageData } from "./$types";

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="p-4">
	<h1 class="text-xl font-semibold pb-3">Event Details</h1>
	{#if form?.formErrors}
		<div>
			{#each form.formErrors as error}
				<div class="text-red-500">{error}</div>
			{/each}
		</div>
	{/if}
	<form method="POST" class="flex flex-col gap-4">
		<label class="flex flex-col">
			<div class="flex items-center gap-2 justify-between">
				<span class="w-1/4">Title</span>
				<input
					class="flex-grow"
					name="title"
					type="text"
					value={data.event?.title}
				/>
			</div>
			{#if form?.fieldErrors.title}
				<span class="text-red-500">{form.fieldErrors.title}</span>
			{/if}
		</label>
		<label class="flex flex-col">
			<div class="flex items-center gap-2 justify-between">
				<span class="w-1/4">Description</span>
				<textarea
					class="flex-grow"
					name="description"
					rows={5}
					value={data.event?.description}
				/>
			</div>
			{#if form?.fieldErrors.description}
				<div class="text-red-500">{form.fieldErrors.description}</div>
			{/if}
		</label>
		<button
			class="hover:bg-sky-600 rounded px-4 py-2 font-semibold text-white bg-sky-700"
			>Submit</button
		>
	</form>
</div>
