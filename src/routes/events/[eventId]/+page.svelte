<script lang="ts">
	import Errors from "$lib/components/Errors.svelte";
	import Input from "$lib/components/Input.svelte";
	import Select from "$lib/components/Select.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import type { ActionData, PageData } from "./$types";

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="p-4">
	<h1 class="text-xl font-semibold pb-3">Event Details</h1>

	<form method="POST" class="flex flex-col gap-4">
		<Errors errors={form?.formErrors} />

		<Input
			name="title"
			value={data.event?.title}
			label="Title"
			type="text"
			errors={form?.fieldErrors.title}
		/>

		<Textarea
			name="description"
			value={data.event?.description}
			label="Description"
			errors={form?.fieldErrors.description}
		/>

		<Select
			name="locationId"
			value={data.event?.locationId}
			label="Location"
			options={data.locationOptions}
			errors={form?.fieldErrors.locationId}
		/>

		<Input
			name="startDateTime"
			value={data.event?.startDateTime}
			label="Start Date & Time"
			type="datetime-local"
			errors={form?.fieldErrors.startDateTime}
			pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
		/>
		<input
			type="hidden"
			name="utcOffset"
			value={new Date().getTimezoneOffset()}
		/>

		<button
			class="hover:bg-sky-600 rounded px-4 py-2 font-semibold text-white bg-sky-700"
			>Submit</button
		>
	</form>
</div>
