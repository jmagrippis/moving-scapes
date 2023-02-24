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

<header>
	<h1><a href="/">Moving Scapes</a></h1>
	<nav>
		<a href="/about">About</a>
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
			<button>
				<ThemeToggleIcon />
			</button>
		</form>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
