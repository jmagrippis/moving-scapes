<script lang="ts">
	import {page} from '$app/stores'
</script>

<div class="container grow py-4 px-2">
	<h1 class="mb-4 text-4xl">{$page.data.copy.unique['About our project']}</h1>
	<p>
		{$page.data.copy.unique['description-start']}
		<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@movingscapes"
			>{$page.data.copy.unique['link']}</a
		>{$page.data.copy.unique['description-end']}
	</p>
</div>
