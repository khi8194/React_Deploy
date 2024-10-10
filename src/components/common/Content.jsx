import { motion } from 'framer-motion';

/*
- 작업1 : 서브페이지 컴포넌트 안쪽에서 컨텐츠 영역만 Wrapping처리해줄 Content.jsx 를 생성
	- 작업2 : Context.jsx의 children으로 각 페이지의 콘텐츠를 전달해주도록 처리
	- 작업3 : 각 서브페이지 컴포넌트에 Content컴포넌트를 Wrapper형태로 감싸서 각 페이지 전용 컨텐츠 내용 전달

export default function Content({ children }) {
	return <div className='content'>{children}</div>;
}
*/

export default function Content({ children, duration = 1, delay = 0 }) {
	//motion data
	const { init, active, end, time } = {
		init: { opacity: 0, y: 200 },
		active: { opacity: 1, y: 0 },
		end: { opacity: 0, y: 200, transition: { delay: 0 } },
		time: { duration: duration, delay: delay }
	};

	return (
		<motion.div className='content' initial={init} animate={active} exit={end} transition={time}>
			{children}
		</motion.div>
	);
}

/*
미션
- 문제점 인식 : 각 페이지마다 동일한 Content 컴포넌트를 적용해서 모든 페이지는 동일한 모션을 공유하고 있어서 UX적으로 단조로움
- 해결방법 : Content 호출시 전용 모션정보를 props로 전달해서 내부적으로 옵션객체를 합친 뒤 적용
- 개선된 사항 : 위의 이유해결을 통해서 스터디팀원 베타테스터를 통해서 사용성 테스트를 자체적으로 진행해본 결과 개선 전에는 한시간당 사이트 체류시간이 얼마엿는데 개선 후에는 웹앱의 사용자 체류시간이 얼만큼 늘었다.
*/
