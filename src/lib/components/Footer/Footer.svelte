<script lang="ts">
	import {page} from '$app/stores'

	import YouTubeIcon from '$lib/icons/youtube.svg?component'
	import GitHubIcon from './github.svg?component'
	import DiscordIcon from './discord.svg?component'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer class="flex items-center justify-center gap-2 py-2">
	<div class="flex shrink-0 items-center justify-center gap-2">
		{$page.data.copy.common['Made with']}
		<PulsingHeart />
		{$page.data.copy.common.by} <a href="https://magrippis.com">jmagrippis</a>
	</div>

	<a
		href="https://www.youtube.com/@jmagrippis"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="YouTube"
		class="hover:text-emphasis-hover"
	>
		<YouTubeIcon title="Johnny's YouTube channel" class="w-5" />
	</a>
	<a
		href="https://github.com/jmagrippis/moving-scapes"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="hover:text-emphasis-hover"
	>
		<GitHubIcon class="w-5" />
	</a>
	<a
		href="https://discord.gg/eR5Q52Sfm3"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Join Johnny's Discord community!"
		class="hover:text-emphasis-hover"
	>
		<DiscordIcon class="w-5" />
	</a>
</footer>
