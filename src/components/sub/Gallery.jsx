import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import Modal from '../common/Modal';

export default function Gallery() {
	const [Flickr, setFlickr] = useState([]);
	//모달 컴포넌트 출력여부를 결정할 state생성
	const [ModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const method = `flickr.people.getPhotos`;
		const flickr_api = import.meta.env.VITE_FLICKR_API;
		const myID = '201494903@N03';
		const num = 10;
		const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setFlickr(json.photos.photo);
				console.log(json);
			});
	}, []);

	return (
		// 복수개의 요소를 다루기 위해 하나로 묶어내기 (하나로 묶지 않으면 에러발생)
		<>
			<Layout title={'GALLERY'}>
				<section className='galleryList'>
					{Flickr.map((data, idx) => {
						return (
							<article key={idx} onClick={() => setModalOpen(true)}>
								<Pic
									src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
									className='pic'
									shadow
								/>
								<h3>{data.title}</h3>
							</article>
						);
					})}
				</section>
			</Layout>

			{/* ModalOpen 상태값이 true일때에만 Modal컴포넌트를 호출해서 출력 */}
			{ModalOpen && <Modal>FLICKR IMAGE</Modal>}
		</>
	);
}

/*
미션
1. Modal의 생성유무를 Gallery안쪽의 특정 State에 연동되도록 처리
2. 기본적으로 Modal이 안보이도록 초기 설정
3. article 요소 자체를 클릭하면 Modal이 보이도록 설정
*/
