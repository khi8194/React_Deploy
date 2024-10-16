import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';

import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';
import Posts from './components/sub/Posts';
import Youtube from './components/sub/Youtube';

import { Route, Routes, useLocation } from 'react-router-dom';
import YoutubeDetail from './components/sub/YoutubeDetail';

import { AnimatePresence } from 'framer-motion';
import MobileMenu from './components/common/MobileMenu';

export default function App() {
	const location = useLocation();
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
				</Routes>
			</AnimatePresence>
			<MobileMenu />
			<Footer />
		</>
	);
}
