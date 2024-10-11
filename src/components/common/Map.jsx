import { useEffect, useRef, useState } from 'react';
export default function Map() {
	const { kakao } = window;
	const ref_mapFrame = useRef(null);
    //지점 정보를 변경하기 위한 데이터 순번을 state에 저장
	//이후 인스턴스 호출하는 구문에 일괄적으로 Index값 연동
	const [Index, setIndex] = useState(0);

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

	// const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng });
    const inst_markerImg = new kakao.maps.MarkerImage(
		// ref_info.current[0].markerImg,
		// ref_info.current[0].markerSize,
		// ref_info.current[0].markerOffset
        ref_info.current[Index].markerImg,
		ref_info.current[Index].markerSize,
		ref_info.current[Index].markerOffset
	);
	// 마커 인스턴스 생성시 전달되는 인수의 객체에 두번째 프로퍼티로 이미지 인스턴스 연결 (이미지가 적용된 마커 생성)
	// const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng, image: inst_markerImg });
    const inst_marker = new kakao.maps.Marker({ position: ref_info.current[Index].latlng, image: inst_markerImg });

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
        const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: ref_info.current[Index].latlng });
        inst_marker.setMap(inst_map);
	}, []);

    return (
		<section className='map'>
			<h2>Location</h2>

            {/* <figure className='mapFrame'></figure> */}
			<figure ref={ref_mapFrame} className='mapFrame'></figure>
		</section>
	);
}

/*
  미션 (11시 23분)
  - 지도 출력 박스 밑에 참조객체 담겨있는 지점정보 배열을 활요하여 동적으로 지점 버튼 3개 출력
  - 이때 title정보값으로 버튼 이름 활용
  - 버튼 클릭시 Index 상태값을 변경해 바뀐 순번의 지점 정보로 화면이 갱신되도록 이벤트 처리
*/