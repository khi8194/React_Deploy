import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	// // const [Colors, setColors] = useState(['red', 'green', 'blue']);
	// const [Num, setNum] = useState(0);
	const [Vids, setVids] = useState([]);
	console.log(Vids);

	// 	// //state값은 무조건 state변경함수를 통해서만 변경가능
	// 	// //변경할 값이 참조형자료이면 무조건 전개연산자를 통해서 완전복사해서 state전용변경함수로 변경처리
	// 	// const changeColor = () => {
	// 	// 	const newColors = [...Colors];
	// 	// 	newColors[0] = 'hotpink';
	// 	// 	setColors(newColors);
	// 	// };

	// 	useEffect(() => {
	// 		//의존성배열이 비어있는 useEffect안쪽의 콜백함수는 컴포넌트 마운트시 한번만 호출됨
	// 		console.log('Mounted');

	// 		return () => {
	// 			//clean-up함수 해당 컴포넌트 언마운트시 실행될 함수
	// 			console.log('UnMounted');
	// 		};
	// 	}, []);

	// 	useEffect(() => {
	// 		//의존성배열에 등록된 Num값이 변경될때마다 useEffect안쪽의 콜백함수 호출됨
	// 		console.log('Num값 변경될때마다 호출');
	// 	}, [Num]);

	// 	return (
	// 		<Layout title={'YOUTUBE'}>
	// 			{/* <button onClick={changeColor}>set New Color</button>

	// 			<ul>
	// 				{Colors.map((color, idx) => {
	// 					return (
	// 						<li style={{ color: color }} key={idx}>
	// 							{color}
	// 						</li>
	// 					);
	// 				})}
	// 			</ul> */}
	// 			<h2>{Num}</h2>

	// 			<button onClick={() => setNum(Num + 1)}>changeNum</button>
	// 		</Layout>
	// 	);
	// }

	// /*
	// 	useEffect (생명주기 관리함수 : 생성(Mount), 변경(ReRender), 소멸(UnMount))
	// */

	const api_key = 'AIzaSyCKLA8E45lLrWn_7MlJL692LpwsZ9mwa_4';
	const pid = 'PL7dKBcBdt1leSwaAYMfi9B9GkbLK_A_oh';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	//기존적으로 리액트는 state값 변경을 자동으로 인지해서 자기자신 컴포넌트 함수를 재호출해서
	//해당 state 정보값에 기반한 새로운 JSX르 반환으로  화면의 변경점 갱신
	//위의 관점에서 봤을떄 useEffect를 활용하지 않고 바로 서버데이터를 state에 담으면
	//처음 마운트시 서버에서 데이터를 가져오고 해당 데이터를 state에 담자마자 컴포넌트는 재호출됨
	//컴포넌트가 재호출되면 다시 또다시 서버데이터를 가져오고  다시 state에 담음 - 이와 같이 위의 로직이 무한반복 처리됨
	//해결방법 : 의존성배열이 비어있는 useEffect의 콜백함수 안쪽에서 data fetching 및 state에 담는 로직을 호출해서
	//컴포넌트 마운트시 처음 한번만 호출되도록 강제해야 함
	//미션
	//11시 5분까지 직적 useEffect로 위의 이슈사항 해설

	// fetch(url)
	// 	.then(data => data.json())
	// 	.then(json => {
	// 		const youtubeArr = json.items;
	// 		setVids(youtubeArr);
	// 	});

	return <Layout title={'YOUTUBE'}></Layout>;
}
