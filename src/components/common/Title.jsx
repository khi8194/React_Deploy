// export default function Title(props) {
// 	console.log(props);
// 	return <h1 className='title'>{props.text}</h1>;
// }

//미션
//해당 타이틀 컴포넌트를 부모에서 호출할때
//color를 props로 글자 색상값을 전달받아서
//h1에 원하는 글자색상이 적용되도록 처리

// export default function Title({ color, text }) {
// 	return (
// 		<h1 className='title' style={{ color: color }}>
// 			{text}
// 		</h1>
// 	);
// }

export default function Title({ color = '#333', children }) {
	return (
		<h1 className='title' style={{ color: color }}>
			{children}
		</h1>
	);
}
// 강의 오전 10:05
//props.children을 이용해서 복잡한 구조의 데이터를 자식컴포넌트로 전달

//미션
//해당 children 속성을 활용해서 모든 서브페이지 동일한 구조의 틀을 유지하도록 Layout.jsx컴포넌트를 어떤식으로 구성할지 고민
