<script lang="ts">
	import YouTubeIcon from '$lib/icons/youtube.svg?component'
	import GitHubIcon from './github.svg?component'
	import DiscordIcon from './discord.svg?component'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer class="flex items-center justify-center gap-2 py-2">
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with <PulsingHeart /> by <a href="https://magrippis.com">jmagrippis</a>
	</div>

	<a
		href="https://www.youtube.com/@jmagrippis"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="YouTube"
		class="transition-colors hover:text-secondary-500 dark:hover:text-secondary-400"
	>
		<YouTubeIcon title="Johnny's YouTube channel" class="w-5" />
	</a>
	<a
		href="https://github.com/jmagrippis/moving-scapes"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="transition-colors hover:text-secondary-500 dark:hover:text-secondary-400"
	>
		<GitHubIcon class="w-5" />
	</a>
	<a
		href="https://discord.gg/eR5Q52Sfm3"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Join Johnny's Discord community!"
		class="transition-colors hover:text-secondary-500 dark:hover:text-secondary-400"
	>
		<DiscordIcon class="w-5" />
	</a>
</footer>
