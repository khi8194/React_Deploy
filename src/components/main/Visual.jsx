import { useFlickrQuery } from '../../hooks/useFlickr';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Virtual } from 'swiper/modules';
import Pic from '../common/Pic';
import 'swiper/css';
import 'swiper/css/virtual';

function BtnStart() {
	const swiper = useSwiper();

	return (
		<button
			hidden={swiper.autoplay.running}
			className='btnStart'
			onClick={() => {
				swiper.autoplay.start();
			}}>
			<FaPlay />
		</button>
	);
}

export default function Visual() {
	const [Index, setIndex] = useState(0);
	const { data, isSuccess } = useFlickrQuery({ type: 'mine' });

	return (
		<figure className='visual'>
			<div className='textBox'>
				{data?.map((el, idx) => (
					<h2 key={idx} className={Index === idx ? 'on' : ''}>
						{el.title.substr(0, 30)}
					</h2>
				))}
			</div>
			<Swiper
				modules={[Autoplay, Pagination, Virtual]}
				virtual
				pagination={{ type: 'fraction' }}
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				breakpoints={{
					1000: {
						slidesPerView: 2,
						spaceBetween: 50
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 50
					}
				}}
				centeredSlides={true}
				onSlideChange={el => setIndex(el.realIndex)}
				autoplay={{ delay: 2000, disableOnInteraction: true }}
				onSwiper={swiper => {
					setTimeout(() => {
						swiper.slideNext();
						swiper.autoplay.start();
					}, 1000);
				}}>
				{isSuccess &&
					data.map((pic, idx) => {
						if (idx >= 10) return null;
						return (
							<SwiperSlide key={pic} virtualIndex={idx}>
								<div className='inner'>
									<Pic
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
										style={{ width: '100%', height: '100%' }}
										shadow
									/>
								</div>
							</SwiperSlide>
						);
					})}
				<BtnStart />
			</Swiper>
		</figure>
	);
}
