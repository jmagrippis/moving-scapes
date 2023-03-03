import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals, parent}) => {
	const {copy} = await parent()
	return {
		meta: {
			title: 'About',
		},
		copy: {
			...copy,
			unique: locals.dictionary.about,
		},
	}
}
