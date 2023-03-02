<section
	class="relative flex h-[80vh] shrink-0 flex-col items-center justify-center gap-8 p-4 font-display md:gap-12"
>
	<video
		class="absolute -z-10 h-full w-full object-cover blur-sm"
		muted
		autoplay
		loop
		playsinline
		disablepictureinpicture
	>
		<source src="/hero-bg.webm" type="video/webm" />
		<source src="/hero-bg.mp4" type="video/mp4" />
	</video>
	<h1 class="mb-6 text-6xl drop-shadow md:text-8xl xl:text-9xl">Moving Scapes</h1>
	<a
		href="https://www.youtube.com/@movingscapes"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="subscribe to our YouTube"
		class="relative col-span-3 rounded border-2 border-emphasis px-4 py-2 text-4xl shadow-mid drop-shadow backdrop-blur transition-colors hover:border-x-emphasis-hover active:top-[-1px] md:text-5xl xl:text-6xl"
		>subscribe</a
	>
</section>

<style lang="postcss">
	section {
		@apply brightness-110;
	}

	:global([data-theme='dark']) section {
		@apply brightness-90;
	}

	@media (prefers-color-scheme: dark) {
		:global([data-theme='auto']) section {
			@apply brightness-90;
		}
	}
</style>
