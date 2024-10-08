import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Layout({ title, children }) {
	const ref_title = useRef(null);
	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		//전달한 인수가 3개 이상일 때는 객체형식으로 전달
		// splitText(ref_title, 0.1, 2);
		// splitText(ref_title, 0.1, 1.15);
		// splitText(ref_title, { interval: 0.1, delay: 3 });
		splitText(ref_title, { interval: 0.1, delay: 0.9 });
		// splitText(ref_title, { interval: 0.1 });
	}, []);

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			<h1 ref={ref_title}>{title}</h1>

			{/* <section>{children}</section> */}
			<motion.section initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{}} transition={{}}>
				{children}
			</motion.section>
		</main>
	);
}
