import { motion } from 'framer-motion';
import Mask from './Mask';

export default function MaskText({ children, className = '', duration = 0.5, delay = 0, color = '#000', style }) {
	const frameStyle = {
		fontSize: '1.2rem',
		fontFamily: 'orbitron',
		color: color,
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		marginBottom: 10
	};

	const { init, active, end, time } = {
		init: { opacity: 0 },
		active: { opacity: 1 },
		end: { opacity: 0, transition: { delay: 0 } },
		time: { duration: 0.01, delay: duration / 2 + delay }
	};

	return (
		// <div style={{ ...frameStyle, ...style }}>
		// <div style={{ ...frameStyle, ...style }} className='maskText'>
		// 컴포넌트에는 className이 직접적으로 적용 불가하므로 컴포넌트에 적용한 className을
		//마치 props처럼 전달받아서 실제 컴포넌트 내부의 jsx요소에 연결
		<div className={className} style={{ ...frameStyle, ...style }}>
			<motion.span initial={init} animate={active} exit={end} transition={time}>
				{children}
			</motion.span>
			<Mask duration={duration} delay={delay} color={color} />
		</div>
	);
}
