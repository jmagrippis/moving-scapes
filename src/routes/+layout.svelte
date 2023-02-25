<script lang="ts">
	import '@fontsource/inter/400.css'
	import '@fontsource/mansalva/400.css'
	import '@fontsource/noto-color-emoji'

	import '../app.css'
	import Header from '$lib/components/Header/Header.svelte'
	import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<Header />
<slot />
<Footer />
