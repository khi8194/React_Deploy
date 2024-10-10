import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MaskText from './MaskText';
import Mask from './Mask';

export default function Layout({ title, children }) {
	//커스텀훅으로 핸들러함수 안쪽에서 호출할 수 있는 실제사용가능한 함수 반환 받음
	const ref_title = useRef(null);
	// const ref_slogan = useRef(null); //MaskText.jsx생성 후 제거

	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		//전달한 인수가 3개 이상일 때는 객체형식으로 전달
		// splitText(ref_title, 0.1, 2);
		// splitText(ref_title, 0.1, 1.15);
		// splitText(ref_title, { interval: 0.1, delay: 3 });
		// splitText(ref_title, { interval: 0.1, delay: 0.9 });
		splitText(ref_title, { interval: 0.1 });
		// ref_slogan.current.classList.add('on'); //MaskText.jsx생성 후 제거
		// useEffect에 의존성 배열에 특정 값을 등록하라고 뜨는 경우
		// 해당 컴포넌트자제척으로 제어되지 않은 요소가 useEffect안쪽에서 활용되고 있을 때 등록하라는 권공 사항 출력
		// 해결방법 : 등록 처리(잘못등록하면 재귀적호출 되면서 무한 호출문제)
		// 무한호출시 해결방법:useMemo, useCallback등의 메모리제이션 훅을 이용해서 강제로 메모리에 등록 후 사용
	}, []);

	return (
		<>
			<main className={isDetail ? 'detail' : title.toLowerCase()}>
				<h1 ref={ref_title}>{title}</h1>

				{/* 
				<div className='slogan' ref={ref_slogan}>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla!
				</span>
				<div className='mask'></div>
				</div> 
				*/}
				{/* <MaskText duration={1} delay={0} color={'#000'} style={{ fontFamily: 'raleway' }}> */}
				<MaskText duration={0.5} delay={0} color={'#444'} style={{ fontSize: 20, fontFamily: 'arial' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla!
				</MaskText>
				<br />
				{/* <MaskText duration={0.6} delay={1} color={'green'} fontFamily={'raleway'}>
					Lorem ipsum dolor
				</MaskText> */}
				{/* <MaskText duration={0.6} delay={1} color={'green'} style={{ marginTop: 50, fontSize: 80, fontFamily: 'raleway' }}> */}
				<MaskText duration={0.5} delay={0.5} color={'#444'} style={{ marginBottom: 120 }}>
					Lorem ipsum dolor
				</MaskText>

				{/* <section>{children}</section> */}
				<motion.section
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					// transition={{ duration: 1, delay: 0.7 }}>
					transition={{ duration: 1, delay: 0.7, ease: 'linear' }}>
					{children}
				</motion.section>
			</main>

			{/* <Mask duration={0.5}/> */}
			{/* 다른 요소와는 다르게 전체 페이지를 덮을 때에는 Mask요소가 브라우저를 기준으로 위치가 배치되어애 하므로 fixed 속성으로 변경 */}
			<Mask style={{ position: 'fixed' }} />
		</>
	);
}

/*
slogan프레임이 활성화되면(on클래스 불으면) 마스크박스가 왼쪽 밖에서 오른쪽 밖으로 1초동안 등속이동
마스크가 절반이동한 시점인 0.5초 시점에 span 텍스트를 보임처리
*/
