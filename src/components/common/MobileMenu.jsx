import { useEffect } from 'react';
// import { useGlobalDispatch, ACTIONS } from '../../hooks/useGlobal';
import { motion } from 'framer-motion';
import useThrottle from '../../hooks/useThrottle';
import { useZustandStore } from '../../hooks/useZustand';

export default function MobileMenu() {
	console.log('mobileMenu');
	// const { dispatch } = useGlobalDispatch();
	const { setMenuClose } = useZustandStore();

	const { initial, animate, exit, transition } = {
		initial: { x: -300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
		transition: { duration: 0.5 }
	};

	const closeMenu = () => {
		console.log('closeMenu');
		// if (window.innerWidth >= 1000) dispatch({ type: 'CLOSE' });
		if (window.innerWidth >= 1000) setMenuClose();
	};
	const throttledCloseMenu = useThrottle(closeMenu);

	useEffect(() => {
		window.addEventListener('resize', throttledCloseMenu);

		return () => window.removeEventListener('resize', throttledCloseMenu);
	}, [throttledCloseMenu]);

	return (
		// <motion.aside
		// 	className='mobileMenu'
		// 	onClick={() => dispatch({ type: ACTIONS.SET_MENU_CLOSE })}
		// 	initial={initial}
		// 	animate={animate}
		// 	exit={exit}
		// 	transition={transition}>
		<motion.aside
			className='mobileMenu'
			onClick={setMenuClose}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}>
			MobileMenu
		</motion.aside>
	);
}
