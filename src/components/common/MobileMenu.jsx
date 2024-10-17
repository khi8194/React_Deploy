// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FaBars } from 'react-icons/fa';

import { useGlobalState } from '../../hooks/useGlobal';

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
	const { menuDispatch } = useGlobalState();
	return (
		<aside className='mobileMenu' onClick={() => menuDispatch({ type: 'CLOSE' })}>
			MobileMenu
		</aside>
	);
}
