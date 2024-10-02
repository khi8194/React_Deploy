export default function Layout({ title, children }) {
	return (
		<main className={title.toUpperCase()}>
			<h1>{title}</h1>

			<section>{children}</section>
		</main>
	);
}

//미션
//위의 레이아웃 컴포넌트 구조 분석
//모든 서브페이지 컴포넌트에 위의 레이아웃 컴포넌트를 적용해서 같은 레이아웃을 공유하도록 설정
