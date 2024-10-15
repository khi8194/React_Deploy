// import { useState, useEffect, useCallback } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { Link } from 'react-router-dom';
import Content from '../common/Content';
import { useYoutubeQuery } from '../../hooks/useYoutube';

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();
	// const [Vids, setVids] = useState([]);

	// // const fetchYoutube = () => {
	// const fetchYoutube = useCallback(() => {
	// 	// const api_key = 'AIzaSyCKLA8E45lLrWn_7MlJL692LpwsZ9mwa_4';
	// 	const api_key = import.meta.env.VITE_YOUTUBE_API;
	// 	const pid = 'PL7dKBcBdt1leSwaAYMfi9B9GkbLK_A_oh';
	// 	const num = 10;
	// 	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	// 	fetch(url)
	// 		.then(data => data.json())
	// 		.then(json => {
	// 			console.log(json.items);
	// 			setVids(json.items);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	fetchYoutube();
	// }, [fetchYoutube]);

	//useQuery기능이 내장된 유튜브데이터 가져오는 커스텀훅 호출
	// const result = useYoutubeQuery();
	// console.log(result);
	//useQuery가 반환하는 결과값중 자주쓰는 프로퍼티 정리
	//data:실제반환받은 서버데이터 / isPending: 요청대기 유무 / isError: 데이터반환 실패 유무 / error: 데이터요청 실패시 반환받는 에러 정보객체
	//아래와같이 리액트쿼리를 활용한 커스텀훅으로 서버데이터를 받으면 기존처럼 지저분하게 useState, useEffect, useCallback훅을 사용할 필요가 없음
	const { data: Vids, isPending } = useYoutubeQuery();

	return (
		<Layout title={'YOUTUBE'}>
			{/* <Content delay={1}>
				{Vids.map((vid, idx) => { */}
			<Content delay={1}>
				{isPending && <p>Loading...</p>}
				{Vids?.map((vid, idx) => {
					return (
						<article key={idx}>
							<h3>
								<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 60)}</Link>
							</h3>
							<div className='txt'>
								<p>{shortenText(vid.snippet.description, 150)}</p>
								<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
							</div>
							<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						</article>
					);
				})}
			</Content>
		</Layout>
	);
}
