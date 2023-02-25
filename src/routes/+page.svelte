<script lang="ts">
	import type {PageServerData} from './$types'
	import Hero from './Hero.svelte'

	export let data: PageServerData
</script>

<Hero />

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
