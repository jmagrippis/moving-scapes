import {match} from '@formatjs/intl-localematcher'
import type {Handle} from '@sveltejs/kit'
import Negotiator from 'negotiator'

export type Theme = 'light' | 'dark' | 'auto'

export const isValidTheme = (theme: FormDataEntryValue | null): theme is Theme =>
	!!theme && (theme === 'light' || theme === 'dark' || theme === 'auto')

const supportedLocales = ['en', 'el'] as const
export type SupportedLocale = (typeof supportedLocales)[number]
const defaultLocale: SupportedLocale = 'en'

export const isSupportedLocale = (locale: unknown): locale is SupportedLocale =>
	typeof locale === 'string' && supportedLocales.includes(locale as SupportedLocale)

const FIVE_MINUTES_IN_SECONDS = 5 * 60

export const handle: Handle = async ({event, resolve}) => {
	const theme = event.cookies.get('theme') ?? 'auto'
	if (isValidTheme(theme)) {
		event.locals.theme = theme
	}
	const locale =
		event.cookies.get('locale') ??
		match(
			new Negotiator({
				headers: {'accept-language': event.request.headers.get('accept-language') || ''},
			}).languages(),
			[...supportedLocales],
			defaultLocale
		)
	if (isSupportedLocale(locale)) {
		event.locals.locale = locale
		event.locals.dictionary = (await import(`./dictionaries/${event.locals.locale}.json`)).default
	}

	event.setHeaders({
		'cache-control': `private, max-age=${FIVE_MINUTES_IN_SECONDS}`,
	})
	const response = await resolve(event, {
		transformPageChunk: ({html}) =>
			html.replace('%LANGUAGE%', event.locals.locale).replace('%THEME%', theme),
	})

	return response
}
