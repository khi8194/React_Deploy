//컴포넌트 함수
//JSX라는 리액트만의 문법체계 (돔생성 스크립트 구문을 HTML형식을 본따 만든 템플릿)
//컴포넌트 함수 생성 규칙
//1. 무조건 이름 대문자 (대문자가 아닌 소문자로 작성하면 일반 태그로 인식해서 오류발생)
//2. JSX반환
//3. export문으로 내보냄
//4. 하나의 컴포넌트 함수는 단일 요소만 반환 가능
//5. 결국은 자바스크립트이기 때문에 JS예약어는 사용불가 (class)
//6. 컴포넌트 호출은 먼저 import 문으로 해당 함수명 가져온 뒤 호출
//7. 컴포넌트 호출 방식 <컴포넌트함수명/>

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';

import Contact from './components/sub/Contact';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';
import Posts from './components/sub/Posts';
import Youtube from './components/sub/Youtube';

import { Route, Routes } from 'react-router-dom';

//8. 만약 불필요한 wrapping요소 없이 그룹화하고 싶을때 (<> </>) fragment로 감싸줌

export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/members' element={<Members />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/youtube' element={<Youtube />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/posts' element={<Posts />} />
			</Routes>

			<Footer />
		</>
	);
}

// export default App;

/*
SSR 방식 (HTML파일 불러오는 방식)
Server Side Rendering
-각각의 서브 페이지를 index.html, sub1.html, sub2.html 형식으로 분리한 방식
-각 메뉴 클릭시 일일이 서버쪽에 요청해서 해당 html 파일을 가져오는 방식

CSR 방식 (React 작업방식)
Client Side Rendering
- 처음에 서버로부터 빈 index.html파일 초기에 한번 가져옴
- 이때 컴파일완료된 리액트 컴포넌트 자바스크립트 파일도 한번에 모두 가져옴
- 이후 부터는 메뉴를 클릭할때마다 서버쪽에 정보를 불러오는 것이 아닌 클라이언트 단에서 미리 한번에 불러온 컴포넌트 요소들을 실시간으로 index.html 안쪽에서 바꿔치기
*/
