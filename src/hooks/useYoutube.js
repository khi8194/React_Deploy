import { useQuery } from '@tanstack/react-query';

const fetchYoutube = async ({ queryKey }) => {
	const api_key = import.meta.env.VITE_YOUTUBE_API;
	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const pidA = 'PL7dKBcBdt1leSwaAYMfi9B9GkbLK_A_oh';
	const pidB = 'PL7dKBcBdt1ldPfq4GcMwxx2GMqn8h6CQA';
	const num = 10;

	let url = '';
	const urlA = `${baseURL}?part=snippet&playlistId=${pidA}&key=${api_key}&maxResults=${num}`;
	const urlB = `${baseURL}?part=snippet&playlistId=${pidB}&key=${api_key}&maxResults=${num}`;

	queryKey[1].type === 'A' && (url = urlA);
	queryKey[1].type === 'B' && (url = urlB);

	const data = await fetch(url);
	const json = await data.json();
	return json.items;
};

export const useYoutubeQuery = (opt = { type: 'A' }) => {
	return useQuery({
		queryKey: ['youtubeList', opt],
		queryFn: fetchYoutube,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};
