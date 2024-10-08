import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MaskText from './MaskText';

export default function Layout({ title, children }) {
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
	}, []);

	return (
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
			<MaskText duration={1} delay={0} color={'#000'} style={{ fontFamily: 'raleway' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nulla!
			</MaskText>
			<br />
			{/* <MaskText duration={0.6} delay={1} color={'green'} fontFamily={'raleway'}>
				Lorem ipsum dolor
			</MaskText> */}
			<MaskText duration={0.6} delay={1} color={'green'} style={{ marginTop: 50, fontSize: 80, fontFamily: 'raleway' }}>
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
	);
}

/*
slogan프레임이 활성화되면(on클래스 불으면) 마스크박스가 왼쪽 밖에서 오른쪽 밖으로 1초동안 등속이동
마스크가 절반이동한 시점인 0.5초 시점에 span 텍스트를 보임처리
*/
