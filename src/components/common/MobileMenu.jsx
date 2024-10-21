import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useThrottle from '../../hooks/useThrottle';
import { useZustandStore } from '../../hooks/useZustand';
import { Link } from 'react-router-dom';
// import { FaPeopleGroup } from 'react-icons/fa6';
// import { HiUserGroup } from 'react-icons/hi';
import { GrGroup } from 'react-icons/gr';
import { FaImages, FaYoutube } from 'react-icons/fa';
// import { MdOutlineQuestionAnswere } from 'react-icons/md';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RiMailSendFill } from 'react-icons/ri';

export default function MobileMenu() {
	console.log('mobileMenu');
	// const { setMenuClose } = useZustandStore();
	const setMenuClose = useZustandStore(state => state.setMenuClose);

	const { initial, animate, exit, transition } = {
		initial: { x: -300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
		transition: { duration: 0.5 }
	};

	const closeMenu = () => {
		console.log('closeMenu');
		if (window.innerWidth >= 1000) setMenuClose();
	};

	const throttledCloseMenu = useThrottle(closeMenu);

	useEffect(() => {
		window.addEventListener('resize', throttledCloseMenu);
		return () => window.removeEventListener('resize', throttledCloseMenu);
	}, [throttledCloseMenu]);

	return (
		<motion.aside
			className='mobileMenu'
			onClick={setMenuClose}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}>
			{/* MobileMenu */}
			<h1>
				<Link to='/'>ALPACO</Link>
			</h1>

			{/* ul>li*5>Link[to='/']{text} */}
			<ul>
				<li>
					<Link to='/members'>
						{/* <FaPeopleGroup /> */}
						{/* <HiUserGroup /> */}
						<GrGroup />
						MEMBERS
					</Link>
				</li>
				<li>
					<Link to='/gallery'>
						<FaImages />
						GALLERY
					</Link>
				</li>
				<li>
					<Link to='/youtube'>
						<FaYoutube />
						YOUTUBE
					</Link>
				</li>
				<li>
					<Link to='/contact'>
						{/* <MdOutlineQuestionAnswer /> */}
						<RiQuestionAnswerLine />
						CONTACT
					</Link>
				</li>
				<li>
					<Link to='/posts'>
						<RiMailSendFill />
						POSTS
					</Link>
				</li>
			</ul>
		</motion.aside>
	);
}
