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

export const getPlaylists = async () => playlists
