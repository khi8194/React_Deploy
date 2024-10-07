import { FaBars, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const gnbArr = ['members', 'gallery', 'youtube', 'contact', 'posts'];
	const snsArr = [FaEnvelope, FaInstagram, FaYoutube];

	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<header className='header'>
			<h1>
				<Link to={'/'}>ALPACO</Link>
			</h1>

			<nav>
				<ul className='gnb'>
					{gnbArr.map((data, idx) => {
						return (
							<li key={idx} className={pathname === '/' + data ? 'on' : ''}>
								<Link to={'/' + data}>{data.toUpperCase()}</Link>
							</li>
						);
					})}
				</ul>

				<ul className='sns'>
					{snsArr.map((Data, idx) => {
						<li key={idx}>
							<Data />
						</li>;
					})}
				</ul>
			</nav>

			<FaBars className='btnMenuToggle' />
		</header>
	);
}
