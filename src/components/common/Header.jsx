// import { FaYoutube } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<a href='/'>ALPACO</a>
			</h1>

			<nav>
				<ul className='gnb'>
					<li>
						<a href='#'>MEMBERS</a>
					</li>
					<li>
						<a href='#'>GALLERY</a>
					</li>
					<li>
						<a href='#'>YOUTUBE</a>
					</li>
					<li>
						<a href='#'>CONTACT</a>
					</li>
					<li>
						<a href='#'>POSTS</a>
					</li>
				</ul>

				<ul className='sns'>
					<li>
						<FaYoutube />
					</li>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaEnvelope />
					</li>
				</ul>
			</nav>
		</header>
	);
}
