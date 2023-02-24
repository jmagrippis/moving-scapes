<script>
	import {browser} from '$app/environment'
	import {enhance} from '$app/forms'
	import {page} from '$app/stores'
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'

	$: nextTheme =
		$page.data.theme === 'auto'
			? browser && window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'light'
				: 'dark'
			: $page.data.theme === 'dark'
			? 'light'
			: 'dark'
</script>

<header class="flex items-center justify-between px-2 py-4">
	<h1><a href="/">Moving Scapes</a></h1>
	<nav class="flex items-center gap-4">
		<a href="/about" class="underline decoration-secondary-800 dark:decoration-secondary-400"
			>About</a
		>
		<form
			method="POST"
			action="/?/theme"
			use:enhance={() => {
				const htmlElement = document.querySelector('html')
				if (!htmlElement) return
				htmlElement?.classList.toggle($page.data.theme)
				htmlElement?.classList.toggle(nextTheme)
			}}
		>
			<input name="theme" value={nextTheme} hidden />
			<button class="w-8">
				<ThemeToggleIcon />
			</button>
		</form>
	</nav>
</header>
