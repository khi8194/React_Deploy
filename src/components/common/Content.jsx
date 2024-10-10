import { motion } from 'framer-motion';

/*
- 작업1 : 서브페이지 컴포넌트 안쪽에서 컨텐츠 영역만 Wrapping처리해줄 Content.jsx 를 생성
	- 작업2 : Context.jsx의 children으로 각 페이지의 콘텐츠를 전달해주도록 처리
	- 작업3 : 각 서브페이지 컴포넌트에 Content컴포넌트를 Wrapper형태로 감싸서 각 페이지 전용 컨텐츠 내용 전달

export default function Content({ children }) {
	return <div className='content'>{children}</div>;
}
*/

export default function Content({ children, duration = 0.5, delay = 0 }) {
	//motion data
	const { init, active, end, time } = {
		init: { opacity: 0, y: 200 },
		active: { opacity: 1, y: 0 },
		end: { opacity: 0, y: 200 },
		time: { duration: duration, delay: delay }
	};
	return (
		<motion.div className='content' initial={init} animate={active} exit={end} transition={time}>
			{children}
		</motion.div>
	);
}
