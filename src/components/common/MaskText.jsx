// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MaskText({ children }) {
	// const [Mounted, setMounted] = useState(false);
	//기본 스타일 객체
	const frameStyle = {
		fontSize: '1.2rem',
		fontFamily: 'orbitron',
		color: '#555',
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		marginBottom: 80
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
		backgroundColor: '#555'
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
		<div style={frameStyle}>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { delay: 0 } }}
				transition={{ duration: 0.01, delay: 0.3 }}>
				{children}
			</motion.span>

			<motion.div
				style={maskStyle}
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{ duration: 0.6 }}></motion.div>
		</div>
	);
}
