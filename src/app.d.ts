// See https://kit.svelte.dev/docs/types#app

import type {Theme} from './hooks.server'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			theme: Theme
		}
		interface PageData {
			theme: Theme
		}
		// interface Platform {}
	}
}

export {}
