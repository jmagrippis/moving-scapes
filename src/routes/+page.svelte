<script lang="ts">
	import type {PageServerData} from './$types'

	export let data: PageServerData
</script>

<div
	class="flex h-[80vh] shrink-0 flex-col items-center justify-center bg-primary-100 p-4 dark:bg-primary-900"
>
	<h1 class="text-center text-6xl drop-shadow-md md:text-8xl xl:text-9xl">Moving Scapes</h1>
</div>

<section class="container py-4 px-2">
	<h2 class="mb-4 text-4xl">Popular playlists</h2>
	<ul class="grid gap-4 lg:grid-cols-2">
		{#each data.playlists as { src, title }}
			<li>
				<iframe
					class="aspect-video w-full"
					{src}
					{title}
					frameborder="0"
					allow="clipboard-write; encrypted-media; picture-in-picture;"
					allowfullscreen
				/>
			</li>
		{/each}
	</ul>
</section>
