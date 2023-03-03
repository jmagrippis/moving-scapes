import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({locals}) => {
	const {theme, locale, dictionary} = locals

	return {
		theme,
		locale,
		defaultMeta: dictionary.defaultMeta,
		copy: {common: dictionary.common, unique: {}},
	}
}
