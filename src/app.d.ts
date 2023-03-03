// See https://kit.svelte.dev/docs/types#app

import type {SupportedLocale, Theme} from './hooks.server'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
			locale: SupportedLocale
			dictionary: Record<string, string | Record<string, string>>
		}
		interface PageData {
			theme: Theme
			locale: SupportedLocale
			defaultMeta: Record<string, string | Record<string, string>>
			copy: {
				common: Record<string, string | Record<string, string>>
				unique: Record<string, string | Record<string, string>>
			}
		}
		// interface Platform {}
	}

	// declarations for
	// https://github.com/poppa/sveltekit-svg
	declare module '*.svg?component' {
		import type {ComponentType, SvelteComponentTyped} from 'svelte'
		import type {SVGAttributes} from 'svelte/elements'

		const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>

		export default content
	}

	declare module '*.svg?src' {
		const content: string
		export default content
	}

	declare module '*.svg?url' {
		const content: string
		export default content
	}

	declare module '*.svg?dataurl' {
		const content: string
		export default content
	}
}

export {}
