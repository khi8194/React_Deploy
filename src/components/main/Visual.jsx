// import { useYoutubeQuery } from '../../hooks/useYoutube';
import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Visual() {
	// const { data } = useYoutubeQuery();
	const { data } = useFlickrQuery({ type: 'mine' });
	// const { data } = useFlickrQuery();
	return (
		<figure className='visual'>
			{/* <div style={{ display: 'flex', gap: 40 }}> */}
			<Swiper>
				{data?.map((pic, idx) => {
					if (idx >= 10) return null;
					return (
						// <article key={idx}>
						// 	{/* <Pic src={vid.snippet.thumbnails.high.url} style={{ width: 400, height: 200 }} shadow /> */}
						// 	<Pic
						// 		src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`}
						// 		style={{ width: 400, height: 200 }}
						// 		shadow
						// 	/>
						// </article>
						<SwiperSlide key={idx}>
							<Pic
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`}
								style={{ width: '100%', height: '100%' }}
							/>
						</SwiperSlide>
					);
				})}
				{/* </div> */}
			</Swiper>
		</figure>
	);
}
