import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../../hooks/useShortenText';
import useCombineText from '../../../hooks/useCombineText';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();
	const [Vids, setVids] = useState([]);

	const fetchYoutube = () => {
		// const api_key = 'AIzaSyCKLA8E45lLrWn_7MlJL692LpwsZ9mwa_4';
		shortenText('David');
		const api_key = import.meta.env.VITE_YOUTUBE_API;
		const pid = 'PL7dKBcBdt1leSwaAYMfi9B9GkbLK_A_oh';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				console.log(json.items);
				setVids(json.items);
			});
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<Layout title={'YOUTUBE'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						{/* <Pic className='thumb' src={vid.snippet.thumbnails.high.url} /> */}
						<h3>{shortenText(vid.snippet.title, 60)}</h3>
						{/* <p>{shortenText(vid.snippet.description, 150)}</p>
						<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span> */}
						<div className='text'>
							<p>{shortenText(vid.snippet.description, 150)}</p>
							<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
						</div>
						<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
					</article>
				);
			})}
		</Layout>
	);
}
