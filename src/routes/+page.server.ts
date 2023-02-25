import {fail, type Actions} from '@sveltejs/kit'

import type {PageServerLoad} from './$types'
import {isValidTheme} from '../hooks.server'

type Playlist = {
	src: string
	title: string
}

const playlists: Playlist[] = [
	{
		src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLfiNMmap-wax0IXgCOuaMgwua20JTjphC',
		title: 'Relaxing Waves YouTube Playlist',
	},
	{
		src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLfiNMmap-wawv9pcU0fKAcCbO2_f0QHzf',
		title: 'My Natural Aquarium YouTube Playlist',
	},
]

export const load: PageServerLoad = () => ({
	playlists,
})

const TEN_YEARS_IN_SECONDS = 10 * 365 * 24 * 60 * 60

export const actions: Actions = {
	theme: async ({cookies, request}) => {
		const data = await request.formData()
		const theme = data.get('theme')

		if (!isValidTheme(theme)) {
			return fail(400, {theme, missing: true})
		}

		cookies.set('theme', theme, {path: '/', maxAge: TEN_YEARS_IN_SECONDS})

		return {success: true}
	},
}
