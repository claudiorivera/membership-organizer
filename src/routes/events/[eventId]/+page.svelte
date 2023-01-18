<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="p-4">
	<h1 class="text-xl font-semibold pb-3">Event Details</h1>
	<form method="POST" class="flex flex-col gap-4">
		<label class="flex gap-2 items-center justify-between">
			<span class="w-1/4">Title</span>
			<input
				class="flex-grow"
				name="title"
				type="text"
				value={data.event?.title}
			/>
		</label>
		<label class="flex gap-2 items-center justify-between">
			<span class="w-1/4">Description</span>
			<textarea
				class="flex-grow"
				name="description"
				value={data.event?.description}
				rows={5}
			/>
		</label>
		<button
			class="hover:bg-sky-600 rounded px-4 py-2 font-semibold text-white bg-sky-700"
			>Submit</button
		>
	</form>
</div>
