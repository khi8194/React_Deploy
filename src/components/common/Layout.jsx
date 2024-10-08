import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';

export default function Layout({ title, children }) {
	const ref_title = useRef(null);
	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		//전달한 인수가 3개 이상일 때는 객체형식으로 전달
		// splitText(ref_title, 0.1, 2);
		splitText(ref_title, 0.1, 1.4);
	}, []);

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			<h1 ref={ref_title}>{title}</h1>

			<section>{children}</section>
		</main>
	);
}
