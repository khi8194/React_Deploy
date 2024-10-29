import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';
import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';
import Posts from './components/sub/Posts';
import PostDetail from './components/sub/PostDetail';
import PostAdd from './components/sub/PostAdd';
import Youtube from './components/sub/Youtube';
import YoutubeDetail from './components/sub/YoutubeDetail';
import MobileMenu from './components/common/MobileMenu';
import ColorSelector from './components/common/ColorSelector';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useZustandStore } from './hooks/useZustand';

export default function App() {
	console.log('app');
	const location = useLocation();
	const IsMenu = useZustandStore(state => state.IsMenu);

	return (
		<>
			<Header />

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/members' element={<Members />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/youtube' element={<Youtube />} />
					<Route path='/youtube/:id' element={<YoutubeDetail />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/post/:slug' element={<PostDetail />} />
					<Route path='/post-add' element={<PostAdd />} />
				</Routes>
			</AnimatePresence>

			<ColorSelector />

			<AnimatePresence>{IsMenu && <MobileMenu />}</AnimatePresence>
			<Footer />
		</>
	);
}
