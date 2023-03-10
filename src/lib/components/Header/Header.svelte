<script lang="ts">
	import {browser} from '$app/environment'
	import {applyAction, enhance} from '$app/forms'
	import {page} from '$app/stores'

	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
	import YouTubeIcon from '$lib/icons/youtube.svg?component'
	import {theme} from '$lib/stores/theme'
	import type {Theme} from '../../../hooks.server'

	const locale = $page.data.locale
	$: nextLocale = locale === 'en' ? 'el' : 'en'

	const deriveNextTheme = (theme: Theme): Theme => {
		switch (theme) {
			case 'dark':
				return 'light'
			case 'light':
				return 'dark'
			case 'auto':
			default:
				if (!browser) return 'auto'
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
		}
	}
	$: nextTheme = deriveNextTheme($theme)
</script>

<header class="container flex items-center justify-between px-2 py-4">
	<a href="/">Moving Scapes</a>
	<nav class="flex items-center gap-4">
		<a href="/about" class="decoration-4">{$page.data.copy.common.About}</a>
		<a
			href="https://www.youtube.com/@movingscapes"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
		>
			<YouTubeIcon title="Moving Scapes' YouTube channel" class="w-7 hover:text-emphasis-hover" />
		</a>
		<form
			method="POST"
			action="/?/theme"
			use:enhance={async () => {
				$theme = nextTheme

				return async ({result}) => {
					await applyAction(result)
				}
			}}
		>
			<input name="theme" value={nextTheme} hidden />
			<button class="w-8">
				<ThemeToggleIcon />
			</button>
		</form>
		<form
			method="POST"
			action="/?/locale"
			use:enhance={() => {
				return () => {
					location.reload()
				}
			}}
		>
			<input name="locale" value={nextLocale} hidden />
			<button class="">{locale === 'en' ? 'EN' : 'EL'}</button>
		</form>
	</nav>
</header>
