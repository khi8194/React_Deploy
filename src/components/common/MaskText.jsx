// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// export default function MaskText({ children, duration = 0 }) {
export default function MaskText({ children, duration, delay, color, style }) {
	// const [Mounted, setMounted] = useState(false);
	//기본 스타일 객체
	const frameStyle = {
		fontSize: '1.2rem',
		fontFamily: 'orbitron',
		color: color,
		// color: '#555',
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		// marginBottom: 80
		marginBottom: 20
	};
	// const conStyle = {
	// 	opacity: 0,
	// 	transitionDuration: '0.1s',
	// 	transitionDelay: '0.3s'
	// };
	const maskStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		backgroundColor: color
		// backgroundColor: '#555'
	};

	// //con, mask의 활성화 스타일 객체
	// const conStyleActive = { ...conStyle, opacity: 1 };
	// const maskStyleActive = { ...maskStyle, left: '100%' };

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setMounted(true);
	// 	}, 1000);
	// }, []);

	/*
	return (
		<div className='slogan' style={frameStyle}>
			<span style={Mounted ? conStyleActive : conStyle}>{children}</span>*/
	{
		/* <div className='mask'></div> */
	} /*
					<div style={Mounted ? maskStyleActive : maskStyle}></div>
				</div>
			);*/

	return (
		// <div style={frameStyle}>
		<div style={{ ...frameStyle, ...style }}>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { delay: 0 } }}
				// transition={{ duration: 0.01, delay: 0.3 }}>
				// transition={{ duration: 0.01, delay: duration / 2 }}>
				transition={{ duration: 0.01, delay: duration / 2 + delay }}>
				{children}
			</motion.span>

			<motion.div
				style={maskStyle}
				// initial={{ x: '-100%' }}
				// animate={{ x: '100%' }}
				initial={{ x: '-101%' }}
				animate={{ x: '101%' }}
				// transition={{ duration: 0.6 }}></motion.div>
				transition={{ duration, delay }}></motion.div>
		</div>
	);
}

/*
  미션
  다음의 불편한 점을 개선하기 위한 props 설정
  - 컴포넌트 호출시 마스크 모션시간 제어
  - 컴포넌트 호출시 마스크 모션이 시작되기까지의 지연시간 제어
  - 마스크색상값도 지정 가능
  - 마스크색상값 텍스트 색상값 연동
  - 글자크기, 글꼴 마진 값등 자잘한 스타일을 호출시에 적용 가능
*/
/*
  미션 (4시 30분까지)
  - 글자크기, 글꼴, 마진 값등 자잘한 스타일을 호출시에 적용가능
*/
