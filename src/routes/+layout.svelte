<script lang="ts">
	import '@fontsource/inter/400.css'
	import '@fontsource/mansalva/400.css'
	import '@fontsource/noto-color-emoji'

	import '../app.css'
	import type {LayoutServerData} from './$types'
	import {page} from '$app/stores'
	import Header from '$lib/components/Header/Header.svelte'
	import Footer from '$lib/components/Footer/Footer.svelte'
	export let data: LayoutServerData

	$: title = $page.data.meta?.title ?? data.defaultMeta.title
	$: description = $page.data.meta?.description ?? data.defaultMeta.description
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
