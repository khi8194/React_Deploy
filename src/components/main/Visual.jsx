import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
//Virtual 모듈 가져옴
import { Virtual } from 'swiper/modules';
import 'swiper/css';
//virtual css 가져옴
import 'swiper/css/virtual';

function BtnStart() {
	const swiper = useSwiper();
	// console.log(swiper);

	return (
		/*
		<button hidden={swiper.autoplay.running} className='btnStart' onClick={() => swiper.autoplay.start()}>
		*/
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
				{/* 이미지 타이틀정보만 별로 뽑아서 Swipe 변경시마다 해당 순번의 타이틀도 같이 모션 처리 */}
				{data?.map((el, idx) => (
					<h2 key={idx} className={Index === idx ? 'on' : ''}>
						{el.title.substr(0, 30)}
					</h2>
				))}
			</div>
			{/* {isSuccess ? ( */}
			<Swiper
				//Virtual 모듈 연결 (동적 요소 Slide 추가시에는 Virtaul 설정 추가해야함)
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
				// onSwiper={swiper => setTimeout(() => swiper.autoplay.start(), 1000)}>
				onSwiper={swiper => {
					setTimeout(() => {
						swiper.slideNext();
						swiper.autoplay.start();
					}, 1000);
				}}>
				{/* 데이터배열을 통해 동적생성되고 있는 Slide 컴포넌트 */}
				{isSuccess &&
					data.map((pic, idx) => {
						if (idx >= 10) return null;
						return (
							//virtualIndex 추가 지정
							// <SwiperSlide key={pic.id} virtualIndex={idx}>
							<SwiperSlide key={pic} virtualIndex={idx}>
								{/*
							원래 코드 : <SwiperSlide key={pic} virtualIndex={idx}>
							gpt 코드 : <SwiperSlide key={pic.id} virtualIndex={idx}>
							( key 속성의 중복 문제 발생으로 key={pic.id}로 수정했으나 확실하지 않음 )
							- React에서는 key 속성이 각 컴포넌트를 고유하게 식별해야 하므로, pic 객체 자체를 key로 사용하는 것은 적절하지 않습니다. 
							- 대신, pic 객체의 고유한 값(예: pic.id)을 key로 사용하는 것이 좋습니다.
							- pic.id를 key로 지정하면, React가 각 슬라이드를 고유하게 식별할 수 있게 되어 오류가 방지됩니다.
							*/}
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

				{/* 자동롤링 시작 버튼 컴포넌트 호출 */}
				<BtnStart />
			</Swiper>
			{/* ) : ( */}
			{/* <p>Loading...</p> */}
			{/* )} */}
		</figure>
	);
}
