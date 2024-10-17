// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FaBars } from 'react-icons/fa';

import { useEffect } from 'react';
import { useGlobalState } from '../../hooks/useGlobal';
import { motion } from 'framer-motion';
import useThrottle from '../../hooks/useThrottle';

export default function MobileMenu() {
	/*
	const [MobileOpen, setMobileOpen] = useState(false);

	const { initial, animate, exit, transition } = {
		initial: { x: -300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
		transition: { duration: 0.5 }
	};
	
	const closePanel = () => {
		console.log('closePanel');
		window.innerWidth >= 1000 && setMobileOpen(false);
	};

	return (
		<>
			<button className='btnToggle' onClick={() => setMobileOpen(!MobileOpen)}>
				<FaBars />
			</button>
			<AnimatePresence>
				{MobileOpen && (
					<motion.aside className='mobileMenu' initial={initial} animate={animate} exit={exit} transition={transition}>
						MobileMenu
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
	*/

	// return <aside className='mobileMenu'>MobileMenu</aside>;
	// const { menuDispatch } = useGlobalState();
	const { dispatch } = useGlobalState();

	const { initial, animate, exit, transition } = {
		initial: { x: -300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
		transition: { duration: 0.5 }
	};

	const closeMenu = () => {
		console.log('closeMenu');
		if (window.innerWidth >= 1000) dispatch({ type: 'CLOSE' });
	};
	const throttleCloseMenu = useThrottle(closeMenu);

	//해당 컴포넌트를 호출하는 부모컴포넌트인 App에서 마운트, 언마운트 처리하고 있으므로 제대로 throttledCloseMenu 이벤트 핸들러 제거 가능
	useEffect(() => {
		window.addEventListener('resize', throttleCloseMenu);
		return () => window.removeEventListener('resize', throttleCloseMenu);
	}, [throttleCloseMenu]);

	return (
		// <aside className='mobileMenu' onClick={() => menuDispatch({ type: 'CLOSE' })}>
		// <aside className='mobileMenu' onClick={() => dispatch({ type: 'CLOSE' })}>
		// <motion.aside className='mobileMenu' onClick={() => dispatch({ type: 'CLOSE' })}>
		<motion.aside
			className='mobileMenu'
			onClick={() => dispatch({ type: 'CLOSE' })}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}>
			MobileMenu
			{/* </aside> */}
		</motion.aside>
	);
}
