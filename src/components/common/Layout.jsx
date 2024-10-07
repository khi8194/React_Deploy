import { useLocation } from 'react-router-dom';

export default function Layout({ title, children }) {
	const { pathname } = useLocation();

	const isDetail = pathname.includes('/youtube/');

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			<h1>{title}</h1>

			<section>{children}</section>
		</main>
	);
}
