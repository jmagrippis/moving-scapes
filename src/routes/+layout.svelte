<script lang="ts">
	import '@fontsource/inter/400.css'
	import '@fontsource/mansalva/400.css'
	import '@fontsource/noto-color-emoji/emoji.css'

	import '../app.css'
	import type {LayoutServerData} from './$types'
	import {page} from '$app/stores'
	import Header from '$lib/components/Header/Header.svelte'
	import Footer from '$lib/components/Footer/Footer.svelte'
	import {theme} from '$lib/stores/theme'
	import {browser} from '$app/environment'
	export let data: LayoutServerData

	$: title = $page.data.meta?.title ?? data.defaultMeta.title
	$: description = $page.data.meta?.description ?? data.defaultMeta.description

	$theme = data.theme
	$: browser && (document.documentElement.dataset.theme = $theme)
</script>

<svelte:head>
	<title>{title} | Moving Scapes</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />

	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Moving Scapes" />
</svelte:head>

<Header />
<slot />
<Footer />
