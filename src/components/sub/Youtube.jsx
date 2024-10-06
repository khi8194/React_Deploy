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

	// 아래와 같이 서버에서 가져오 데이터를 컴포넌트 안쪽에서 활용하기 위해 state담는 구문을 useEffect를 사용하지 않고 바로 활용하면
	// 데이터를 무한 호출하는 이슈가 발생
	// 미션 - 아래 코드를 호출해서 무한데이터 호출이 발생하는 현상을 확인한 뒤, 위와 같인 이슈가 발행하는 원인 고민

	fetch(url)
		.then(data => data.json())
		.then(json => {
			const youtubeArr = json.items;
			setVids(youtubeArr);
		});

	return <Layout title={'YOUTUBE'}></Layout>;
}
