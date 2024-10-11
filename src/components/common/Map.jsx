import { useEffect, useRef, useState } from 'react';

export default function Map() {
	const { kakao } = window;
	const ref_mapFrame = useRef(null);
	const [Index, setIndex] = useState(0);

	const ref_instMap = useRef(null);

	const ref_info = useRef([
		{
			title: 'HYEHWA',
			latlng: new kakao.maps.LatLng(37.5803593, 127.0042622),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			arkerOffset: { offset: new kakao.maps.Point(0, 0) }
		},
		{
			title: 'COEX',
			latlng: new kakao.maps.LatLng(37.5094091584729, 127.0624304750884),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerOffset: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: 'CITYHALL',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			markerImg: 'marker3.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerPos: { offset: new kakao.maps.Point(116, 99) }
		}
	]);

	const { latlng, markerImg, markerSize, markerPos } = ref_info.current[Index];

	const inst_marker = new kakao.maps.Marker({
		position: latlng,
		image: new kakao.maps.MarkerImage(markerImg, markerSize, markerPos)
	});

	//타입컨트롤, 줌컨트롤 인스턴스 생성
	const instType = new kakao.maps.MapTypeControl();
	const instZoom = new kakao.maps.ZoomControl();

	const initPos = () => {
		console.log('initPos called!');
		ref_instMap.current.setCenter(latlng);
	};

	useEffect(() => {
		ref_mapFrame.current.innerHTML = '';
		ref_instMap.current = new kakao.maps.Map(ref_mapFrame.current, { center: latlng });
		inst_marker.setMap(ref_instMap.current);

		[instType, instZoom].forEach(inst => ref_instMap.current.addControl(inst));

		//해당 전역 이벤트연결 구문이 빈 의존성 배열의 콜백안쪽에 등록되었을때의 문제점
		//지점 버튼을 클릭하여 Index 상태값이 변경되면 리사이즈시 갱신된 화면으로 이벤트 연결 불가
		//window에 연결되는 initPos핸들러 함수는 내부적으로 지도인스턴에 위치인스턴스값을 활용해서 위치를 갱신하는 구조
		//리사이즈될떄마다 인스턴스정보값이 갱신되어야 하므로 Index 의존성 배열 안쪽의 콜백에서 호출
		window.addEventListener('resize', initPos);
		return () => window.removeEventListener('resize', initPos);
	}, [Index]);

	return (
		<section className='map'>
			<h2>Location</h2>

			<figure ref={ref_mapFrame} className='mapFrame'></figure>

			<nav className='btnSet'>
				<ul className='branch'>
					{ref_info.current.map((el, idx) => (
						<li key={idx} className={idx === Index ? 'on' : ''} onClick={() => setIndex(idx)}>
							{el.title}
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}
