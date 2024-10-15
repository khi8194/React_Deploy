import { motion } from 'framer-motion';
export default function Mask({ duration = 0.5, delay = 0, color = '#000', style }) {
	const maskStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		backgroundColor: color
	};

	const maskMotion = {
		in: { x: '-101%' },
		on: { x: '101%' },
		time: { duration, delay, ease: 'linear' }
	};

	return (
		// <motion.div
		// 	style={maskStyle}
		// 	variants={maskMotion}
		// 	initial='in'
		// 	animate='on'
		// 	transition={maskMotion.time}></motion.div>
		<motion.div
			// 마스크 호출시 스타일 수정 가능하도록 처리
			style={{ ...maskStyle, ...style }}
			variants={maskMotion}
			initial='in'
			animate='on'
			transition={maskMotion.time}></motion.div>
	);
}

/*
미션
- 생성된 Mask컴포넌트를 활용해서 전체 페이지 이동시 마스크가 전체 화면을 가리고 사라지면서 새로운 페이지 보이는 것 같은 효과 추가
*/
