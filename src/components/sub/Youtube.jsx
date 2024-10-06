import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';

export default function Youtube() {
	const [Vids, setVids] = useState([]);

	// const api_key = 'AIzaSyCKLA8E45lLrWn_7MlJL692LpwsZ9mwa_4';
	const api_key = import.meta.env.VITE_YOUTUBE_API;
	const pid = 'PL7dKBcBdt1leSwaAYMfi9B9GkbLK_A_oh';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(json => {
				console.log(json.items);
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'YOUTUBE'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						<h3>{vid.snippet.title}</h3>
						<p>{vid.snippet.description}</p>
						<span>{vid.snippet.publishedAt}</span>
					</article>
				);
			})}

			{/* {Vids.length > 0 ? (
				Vids.map((vid, idx) => {
					// thumbnails와 high 객체가 존재하는지 확인
					const thumbnail = vid.snippet.thumbnails?.high?.url;

					return (
						<article key={idx}> */}
			{/* thumbnail이 존재하는지 조건부 렌더링 */}
			{/* {thumbnail ? <Pic className='thumb' src={thumbnail} /> : <p>No thumbnail available</p>}
							<h3>{vid.snippet.title}</h3>
							<p>{vid.snippet.description}</p>
							<span>{new Date(vid.snippet.publishedAt).toLocaleDateString()}</span>
						</article>
					);
				})
			) : (
				<p>Loading videos...</p>
			)} */}
		</Layout>
	);
}
