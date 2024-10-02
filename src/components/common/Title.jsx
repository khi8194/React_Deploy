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

export default function Title({ color, children }) {
	return (
		<h1 className='title' style={{ color: color }}>
			{children}
		</h1>
	);
}
// 강의 오전 10:05
//props.children을 이용해서 복잡한 구조의 데이터를 자식컴포넌트로 전달
