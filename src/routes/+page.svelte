<script lang="ts">
	import { formatDateTime } from "$lib/utils";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="p-4">
	<div class="flex pb-4">
		<h1 class="text-xl font-semibold">Events</h1>
		<div class="ml-auto hover:text-sky-700">
			<a href="/events/new">New Event</a>
		</div>
	</div>
	<table class="w-full table-auto border-collapse text-sm">
		<thead>
			<tr class="bg-slate-200 font-bold">
				<th class="p-4 text-left font-medium text-black">Title</th>
				<th class="p-4 text-left font-medium text-black">Date & Time</th>
			</tr>
		</thead>
		<tbody>
			{#each data.events as event}
				<tr class="border-base border-b last:border-none hover:bg-base-200">
					<td class="p-4">
						<a class="hover:text-sky-700" href={`/events/${event.id}`}
							>{event.title}</a
						>
					</td>

					<td class="p-4">
						<a
							class="hover:text-sky-700"
							href={`/events/${event.id}`}
							tabIndex={-1}
						>
							{formatDateTime(event.startDateTime)}
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
