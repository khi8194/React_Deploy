import { useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';

export default function Layout({ title, children }) {
	const ref_title = useRef(null);
	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		//훅 자체적으로 참조객체 요소 활성화 처리
		splitText(ref_title);
	}, []);

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			{/* <motion.h1
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				// exit={{ scale: 2, opacity: 0, transition: { duration: 0.3 } }}
				exit={{ x: -200, opacity: 0, transition: { duration: 0.3 } }}
				transition={{ duration: 1, ease: 'easeIn' }}>
				{title}
			</motion.h1> */}
			<h1 ref={ref_title}>{title}</h1>

			<section>{children}</section>
		</main>
	);
}
