import { useEffect, useRef } from 'react';
export default function Map() {
	const { kakao } = window;
	const ref_mapFrame = useRef(null);

    /*
	const mapOption = {
		center: new kakao.maps.LatLng(33.450701, 126.570667)
	}; 
    */
    /*
    //위치 인스턴스 생성 (지도, 마커 인스턴스 생성시 필요)
	const inst_position = new kakao.maps.LatLng(37.5803593, 127.0042622);
	//마커 인스턴스 생성
	const inst_marker = new kakao.maps.Marker({ position: inst_position });
	*/
    // 각 지도를 출력하기 위한 정보값의 구조가 복잡하고 자주 변경되지 않는 데이터일때에는 일반 지역변수보다 useRef를 통한 참조객체 등록
	// 참조객체는 state변경에 의해서 컴포넌트 재랜더링 되더라도 메모리가 해제되지 않고 해당 값이 계속 유지됨 (closure 개념 언급)
	const ref_info = useRef([
		{
			title: 'COEX', //데이터 구분을 위한 타이틀
			latlng: new kakao.maps.LatLng(37.5803593, 127.0042622), //위도,경도를 활용한 위치 인스턴스
			markerImg: 'marker1.png', //마커이미지 경로
			// markerSize: new kakao.maps.Size(64, 69), //마커사이즈 인스턴스
			// markerOffet: { offset: new kakao.maps.Point(0, 0) } //마커 위치값 인스턴스
            markerSize: new kakao.maps.Size(232, 99), //마커사이즈 인스턴스
            arkerOffset: { offset: new kakao.maps.Point(0, 0) } //마커 위치값 인스턴스
		}
	]);
	// const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng });
    const inst_markerImg = new kakao.maps.MarkerImage(
		ref_info.current[0].markerImg,
		ref_info.current[0].markerSize,
		ref_info.current[0].markerOffset
	);
	// 마커 인스턴스 생성시 전달되는 인수의 객체에 두번째 프로퍼티로 이미지 인스턴스 연결 (이미지가 적용된 마커 생성)
	const inst_marker = new kakao.maps.Marker({ position: ref_info.current[0].latlng, image: inst_markerImg });
    
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
		const inst_map = new kakao.maps.Map(ref_mapFrame.current, { center: ref_info.current[0].latlng });
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