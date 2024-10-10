import { motion } from 'framer-motion';

/*
- 작업1 : 서브페이지 컴포넌트 안쪽에서 컨텐츠 영역만 Wrapping처리해줄 Content.jsx 를 생성
	- 작업2 : Context.jsx의 children으로 각 페이지의 콘텐츠를 전달해주도록 처리
	- 작업3 : 각 서브페이지 컴포넌트에 Content컴포넌트를 Wrapper형태로 감싸서 각 페이지 전용 컨텐츠 내용 전달

export default function Content({ children }) {
	return <div className='content'>{children}</div>;
}
*/

export default function Content({ children, duration = 1, delay = 0, customMotion }) {
	//motion data
	// const { init, active, end, time } = {
	//컨텐츠영역에 기본적으로 적용될 모션 관련 디폴트 정보객체 준비
	//end 프로퍼티에 적용해야 될 딜레이 속성은 객체 합칠때 자동화 처리할 예정이므로
	//디폴트 속성값만 적용
	const defaultMotion = {
		init: { opacity: 0, y: 200 },
		active: { opacity: 1, y: 0 },
		// end: { opacity: 0, y: 200, transition: { delay: 0 } }
		end: { opacity: 0, y: 200 }
		// time: { duration: duration, delay: delay }
	};

	/*
	//호출시 props로 전달되는 커스텀 옵셔객체가 있으면 기존 디폴트 객체를 덮어쓰기한 뒤, 비구조화할당으로 바로 추출
	const { init, active, end } = { ...defaultMotion, ...customMotion };
  */
	//우선은 스타일 객체만 병합해서 반환
	const combined = { ...defaultMotion, ...customMotion };
	//우항에서 기존 합쳐진 combined객체를 다시 deep copy처리한 뒤에 end프로퍼티에 delay값을 0으로 초기화하는 하위 프로퍼티만 다시 덮어씀
	//최종적으로 변경된 객체값에서 비구조화할당 처리
	const { init, active, end } = { ...combined, end: { ...combined.end, transition: { delay: 0 } } };
	console.log(end);

	return (
		// <motion.div className='content' initial={init} animate={active} exit={end} transition={time}>
		// 커스텀 모션옵션이 적용된 값을 바로 JSX요소에 적용
		<motion.div
			className='content'
			initial={init}
			animate={active}
			exit={end}
			transition={{ duration: duration, delay: delay }}>
			{children}
		</motion.div>
	);
}
