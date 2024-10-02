import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const gnbArr = ['members', 'gallery', 'youtube', 'contact', 'posts'];
	const snsArr = [FaEnvelope, FaInstagram, FaYoutube];

	// const path = useLocation();
	// console.log(path);		//고유키값 path이름값
	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<header className='header'>
			<h1>
				<Link to={'/'}>ALPACO</Link>
			</h1>

			<nav>
				{/* <ul className='gnb'>
					<li>
						<Link to={'/members'}>MEMBERS</Link>
					</li>
					<li>
						<Link to={'/gallery'}>GALLERY</Link>
					</li>
					<li>
						<Link to={'/youtube'}>YOUTUBE</Link>
					</li>
					<li>
						<Link to={'/contact'}>CONTACT</Link>
					</li>
					<li>
						<Link to={'/posts'}>POSTS</Link>
					</li>
				</ul> */}
				<ul className='gnb'>
					{gnbArr.map((data, idx) => {
						//미션
						//위의 pathname값을 활용해서 gnb의 li 요소에 on클래스를 붙여서 메뉴명 활성화 로직 구현
						return (
							<li key={idx} className={pathname === '/' + data ? 'on' : ''}>
								<Link to={'/' + data}>{data.toUpperCase()}</Link>
							</li>
						);
					})}
				</ul>

				<ul className='sns'>
					{/* <li>
						<FaYoutube />
					</li>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaEnvelope />
					</li> */}
					{/* 화살표함수 특성상 JSX반환시 {return}문은 생략 가능 */}
					{snsArr.map((Data, idx) => {
						// return (
						<li key={idx}>
							{/* snsArr에서 반복을 돌면서 Data파라미터로 전달되는 각각의 객체는 컴포넌트 함수 아래와같이 JSX문으로 호출 가능 이때 컴포넌트 규칙에 따라 파리미터 명도 대문자로 시작해서 호출 */}
							<Data />
						</li>;
						// );
					})}
				</ul>
			</nav>
		</header>
	);
}
