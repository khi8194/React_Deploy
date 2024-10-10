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
		// 순서2. 마스크 모션이 끝날때 바로 제목 타이핑 모션
		// splitText(ref_title, { interval: 0.1 });
		splitText(ref_title, { interval: 0.1, delay: 0.5 });
	}, []);

	return (
		<>
			<main className={isDetail ? 'detail' : title.toLowerCase()}>
				<h1 ref={ref_title}>{title}</h1>

				{/* <MaskText duration={0.5} delay={0} color={'#444'} style={{ fontSize: 20, fontFamily: 'arial' }}> */}
				{/* 순서3. 텍스트 타이핑 모션 끝날 시점에 첫줄 텍스트 마스크 모션 시작 */}
				<MaskText delay={1} color={'#444'} style={{ fontSize: 20, fontFamily: 'arial' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla!
				</MaskText>
				<br />
				{/* <MaskText duration={0.5} delay={0.5} color={'#444'} style={{ marginBottom: 120 }}>
				{/* 순서4. 첫줄 텍스트 마스크 모션 끝날때 둘째줄 텍스트 마스크 모션 시작 */}
				<MaskText delay={1.5} color={'#444'} style={{ marginBottom: 120 }}>
					Lorem ipsum dolor
				</MaskText>

				{/* <section>{children}</section> */}
				{/* 순서5. 두번째 줄 마스크 모션 끝날떄쯤 전체 컨텐츠 영상 위쪽으로 페이드인 시작 */}
				<motion.section
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					// transition={{ duration: 1, delay: 0.7 }}>
					// transition={{ duration: 1, delay: 0.7, ease: 'linear' }}>
					transition={{ duration: 1, delay: 1.5, ease: 'linear' }}>
					{children}
				</motion.section>
			</main>

			{/* <Mask duration={0.5}/> */}
			{/* 다른 요소와는 다르게 전체 페이지를 덮을 때에는 Mask요소가 브라우저를 기준으로 위치가 배치되어애 하므로 fixed 속성으로 변경 */}
			{/* <Mask style={{ position: 'fixed' }} /> */}

			{/* 순번1- 페이지 전환시 바로 전체화면을 가리는 마스크모션 실행 */}
			<Mask duration={0.5} delay={0} style={{ position: 'fixed' }} />
		</>
	);
}

/*
slogan프레임이 활성화되면(on클래스 불으면) 마스크박스가 왼쪽 밖에서 오른쪽 밖으로 1초동안 등속이동
마스크가 절반이동한 시점인 0.5초 시점에 span 텍스트를 보임처리
*/

/*
미션 (~11:40)
- 전체 페이지 전환 마스크 모션 끝난 이후, 페이지별 세부 모션 실행되도록 수정
*/
