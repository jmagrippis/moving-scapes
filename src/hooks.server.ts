import type {Handle} from '@sveltejs/kit'

export type Theme = 'light' | 'dark' | 'auto'

export const isValidTheme = (theme: FormDataEntryValue | null): theme is Theme =>
	!!theme && (theme === 'light' || theme === 'dark' || theme === 'auto')

export const handle: Handle = async ({event, resolve}) => {
	const theme = event.cookies.get('theme') ?? 'auto'
	if (isValidTheme(theme)) {
		event.locals.theme = theme
	}
	const response = await resolve(event, {
		transformPageChunk: ({html}) => html.replace('%THEME%', theme),
	})

	return response
}
