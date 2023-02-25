import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = ({locals}) => ({
	theme: locals.theme,
	defaultMeta: {
		title: 'Chill & get inspired!',
		description: 'Time-lapses, drone footage & hype videos from all around the world!',
	},
})
