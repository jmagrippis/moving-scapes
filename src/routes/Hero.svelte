<div class="flex h-[80vh] shrink-0 flex-col items-center justify-center bg-primary-100 p-4">
	<h1 class="text-center text-6xl drop-shadow-md md:text-8xl xl:text-9xl">Moving Scapes</h1>
</div>

<style lang="postcss">
	:global([data-theme='dark']) div {
		@apply bg-primary-900;
	}

	@media (prefers-color-scheme: dark) {
		:global([data-theme='auto']) div {
			@apply bg-primary-900;
		}
	}
</style>
