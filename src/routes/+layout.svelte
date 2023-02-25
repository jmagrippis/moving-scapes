<script lang="ts">
	import '../app.css'
	import Header from '$lib/components/Header/Header.svelte'
	import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<Header />
<slot />
<Footer />
