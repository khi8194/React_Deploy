import { useEffect, useRef, useState } from 'react';
export default function Map() {
	const { kakao } = window;
	const ref_mapFrame = useRef(null);
	const [Index, setIndex] = useState(0);

    // 각 지점 정보를 참조객체로 관리
    const ref_info = useRef([
		{
            /*
			title: 'HyeHwa', //데이터 구분을 위한 타이틀
			latlng: new kakao.maps.LatLng(37.5803593, 127.0042622), //위도,경도를 활용한 위치 인스턴스
			markerImg: 'marker1.png', //마커이미지 경로
			// markerSize: new kakao.maps.Size(64, 69), //마커사이즈 인스턴스
			// markerOffet: { offset: new kakao.maps.Point(0, 0) } //마커 위치값 인스턴스
            markerSize: new kakao.maps.Size(232, 99), //마커사이즈 인스턴스
            arkerOffset: { offset: new kakao.maps.Point(0, 0) } //마커 위치값 인스턴스
            */
            title: 'HyeHwa',
			latlng: new kakao.maps.LatLng(37.5803593, 127.0042622),
			markerImg: 'marker1.png',
			markerSize: new kakao.maps.Size(232, 99),
			markerOffset: { offset: new kakao.maps.Point(116, 99) }
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

    /*
	// const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng });
    const inst_markerImg = new kakao.maps.MarkerImage(
		// ref_info.current[0].markerImg,
		// ref_info.current[0].markerSize,
		// ref_info.current[0].markerOffset
        ref_info.current[Index].markerImg,
		ref_info.current[Index].markerSize,
		ref_info.current[Index].markerOffset
	);
    */
    //기존 참조객체명까지 매번 호출하기 번거로우므로 비구조화당을 통해 현재 Index순선 상태변화에 따라 활성화되고 있는 객체의 key값을 바로 추출
    const { latlng, markerImg, markerSize, markerPos } = ref_info.current[Index];

	// 마커 인스턴스 생성시 전달되는 인수의 객체에 두번째 프로퍼티로 이미지 인스턴스 연결 (이미지가 적용된 마커 생성)
	// const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng, image: inst_markerImg });
    // const inst_marker = new kakao.maps.Marker({ position: ref_info.current[Index].latlng, image: inst_markerImg });
    //위의 비구조화할당으로 추출한 정보값으로 마커 인스턴스 생성
	const inst_marker = new kakao.maps.Marker({
		position: latlng,
		image: new kakao.maps.MarkerImage(markerImg, markerSize, markerPos)
	});

	//컴포넌트 마운트시 한번만 지도인스턴스 생성 및 마커 인스턴스 바인딩
    /*
    //jsx반환되고 화면에 컴포넌트 마운트시 지도 인스턴스 생성
    useEffect(() => {
		// new kakao.maps.Map(ref_mapFrame.current, mapOption);
        //지도 인스턴스 생성은 ref_mapFrame에 담겨있는 실제 돔요소를 인수로 필요로 하므로 useEffect구문안쪽에서 생성
		//이때 두번째 인수로 위치 인스턴스 전달
		const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: inst_position });
		//생성된 마커인스턴의 setMap 메서드 호출시 지도 인스턴스 값 인수로 전달
		inst_marker.setMap(inst_map);
	}, []);
    */
	useEffect(() => {
		// const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: ref_info.current[0].latlng });
        /*
        const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: ref_info.current[Index].latlng });
        inst_marker.setMap(inst_map);
        */
        const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: latlng });
	}, []);

    return (
		<section className='map'>
			<h2>Location</h2>

            {/* <figure className='mapFrame'></figure> */}
			<figure ref={ref_mapFrame} className='mapFrame'></figure>
		</section>
	);
}