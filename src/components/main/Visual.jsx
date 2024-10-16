import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';
import { Swiper, SwiperSlide } from 'swiper/react';
//AutoPlay 모듈 가져옴
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';

export default function Visual() {
	const [Index, setIndex] = useState();

	// reactQuery hook으로 isSuccess 정보값 가져옴
	const { data, isSuccess } = useFlickrQuery({ type: 'mine' });
	return (
		<figure className='visual'>
			{/* Img titles */}
			<div className='textBox'>
				{data?.map((el, idx) => (
					// <h2 key={idx}>{el.title.substr(0, 30)}</h2>
					<h2 key={idx} className={Index === idx ? 'on' : ''}>
						{el.title.substr(0, 30)}
					</h2>
				))}
			</div>

			{/* Img Pics */}
			{/* onSlideChange 이벤트 발생시 내부 순서값 구하는 프로퍼티로 index (loop:x), realIndex (loop: 0) */}
			{/* <Swiper
				slidesPerView={3}
				spaceBetween={100}
				loop={true}
				centeredSlides={true}
				onSlideChange={el => setIndex(el.realIndex)}> */}
			{/* <Swiper
			slidesPerView={3}
			spaceBetween={100}
			loop={true}
			effect={'coverflow'}
			coverflowEffect={{
				rotate: 50, //패널별 회전 각도
				stretch: 0, //패널간의 당겨짐 정도
				depth: 100, //원근감 정도
				modifier: 1, //위 3가지 속성의 중첩감도 비율
				slideShadows: true //패널의 그림자
			}}
			modules={[EffectCoverflow]}> */}
			{/* {data?.map((pic, idx) => {
					if (idx >= 10) return null;
					return (
						<SwiperSlide key={idx}> */}
			{/* swiperSlide요소에는 바로 css모션 스타일 적용 비권장 */}
			{/* <div className='inner'>
								<Pic
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
									style={{ width: '100%', height: '100%' }}
									shadow
								/>
							</div> */}
			<Swiper
				//autoplay 모듈 연결
				modules={[Autoplay]}
				slidesPerView={3}
				spaceBetween={100}
				loop={true}
				centeredSlides={true}
				onSlideChange={el => setIndex(el.realIndex)}
				//autoplay 속성 (delay:인터벌시간, disableOnInteraction:true)
				autoplay={{
					delay: 1000,
					disableOnInteraction: true
				}}
				//스와이퍼기능이 아직 활성화되지 않은상태에서 autoplay가 적용안되는 이슈 발생
				//onSwiper : 모든 스와이퍼 모듈을 불러온뒤에 기능 적용할 준비완료시
				//해당 이벤트 발생시 자동적으로 파라미터를 통해 swiper인스턴스가 전달됨
				onSwiper={swiper => {
					console.log(swiper);
					//swiper컴포넌트의 준비가 완료되었더라도 리액트쿼리로 데이터를 받아서 동적으로 slide컴포넌트가 완성될때까지의 시간을 setTimeout으로 홀딩
					setTimeout(() => {
						//1초뒤에 SwiperSlide컴포넌트까지 완료시 전달받은 스와이퍼 인스턴스로 강제 롤링시작
						swiper.autoplay.start();
					}, 1000);
				}}>
				{/* 데이터 다 받아진 이후 동적 swiperSlide 생성 */}
				{isSuccess &&
					data.map((pic, idx) => {
						if (idx >= 10) return null;
						return (
							<SwiperSlide key={idx}>
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
			</Swiper>
		</figure>
	);
}
