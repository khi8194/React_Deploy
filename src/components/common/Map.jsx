import { useEffect, useRef, useState } from 'react';

export default function Map() {
	const { kakao } = window;
	const ref_mapFrame = useRef(null);
	// let ref_mapFrame = useRef(null);
	const [Index, setIndex] = useState(0);

	//지도 인스턴스가 담길 빈 참조객체 생성
	const ref_instMap = useRef(null);

	//지도 정보 배열 참조객체 등록 및 비구조화할당으로 개별 정보 추출
	// const ref_info = useRef([
	const { current: ref_info } = useRef([
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

	//기존 참조객체명까지 매번 호출하기 번거로우므로 비구조화당을 통해 현재 Index순선 상태변화에 따라 활성화되고 있는 객체의 key값을 바로 추출
	const { latlng, markerImg, markerSize, markerPos } = ref_info.current[Index];
	// const { latlng, markerImg, markerSize, markerPos } = ref_info[Index];

	//위의 비구조화할당으로 추출한 정보값으로 마커 인스턴스 생성
	const inst_marker = new kakao.maps.Marker({
		position: latlng,
		image: new kakao.maps.MarkerImage(markerImg, markerSize, markerPos)
	});

	//지도위치 중앙으로 초기화 함수
	const initPos = () => {
		console.log('initPost called!');
		ref_instMap.current.setCenter(latlng);
	};

	//Index상태값이 변경될때마다 변경된 순번 상태값으로 지도 인스턴스 다시 생성해서 화면 갱신
	//이슈사항1- 지점버튼 클릭시마다 Index상태값이 의존성배열로 등록되어 있는 useEffect 콜백함수를 재호출
	//해당 콜백이 호출될때마다 내부적으로 새로운 지도 인스턴스가 생성됨
	//리액트는 (SPA:단일페이지 어플리케이션) 특성상 index.html은 그대로 잇고 리액트 컴포넌트 함수만 재호출되는 구조
	//useEffect의 콜백함수가 재호출될때마다 기존 생성된 지도 인스턴스를 삭제하지 않고 계속해서 추가가됨 (mapFrame안쪽에 지도 div가 계속 중첩됨)
	useEffect(() => {
		//강제로 참조된 지도영역안쪽의 html요소들을 계속 초기화처리 (지도 레이어 중첩 문제 해결)
		ref_mapFrame.current.innerHTML = '';
		// const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: latlng });
		// inst_marker.setMap(inst_map);
		ref_instMap.current = new kakao.maps.Map(ref_mapFrame.current, { center: latlng });
		inst_marker.setMap(ref_instMap.current);

		//모든 이벤트문은 무조건 useEffect안쪽에 호출되야함
		//이유: webAPI기능을 활용하는 모든 구문들은 useEffect안쪽에서 실행됨
		//window객체에 이벤트 연결 (리사이즈마다 지도 가운데 위치 초기화 함수 호출)
		window.addEventListener('resize', initPos);
	}, [Index]);

	return (
		<section className='map'>
			<h2>Location</h2>

			<figure ref={ref_mapFrame} className='mapFrame'></figure>

			<nav className='btnSet'>
				<ul className='branch'>
					{ref_info.current.map((el, idx) => (
						// {ref_info.map((el, idx) => (
						//동적으로 li생성 : 클릭한 li의 순서값 idx로 Index 상태값 변경
						// -> 컴포넌트 재랜더링되면서 변경된 순번의 정보값으로 지도화면 갱신됨
						// <li key={idx} onClick={() => setIndex(idx)}>
						<li key={idx} className={idx === Index ? 'on' : ''} onClick={() => setIndex(idx)}>
							{el.title}
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}
