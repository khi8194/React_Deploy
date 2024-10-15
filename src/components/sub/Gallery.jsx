import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import Modal from '../common/Modal';
import Content from '../common/Content';
import { useFlickrQuery } from '../../hooks/useFlickr';

export default function Gallery() {
	/*
	// useFlickrQuery({ type: 'mine' });
	//순서1- 갤러리 컴포넌트에 커스텀훅 호출시 전달해야되는 옵션 객체를 인수로 전달
	const { data } = useFlickrQuery({ type: 'mine' });
	console.log(data); //리액트쿼리훅이 데이터를 잘 반환하는지 확인
	*/
	const ref_gallery = useRef(null);

	// const [Flickr, setFlickr] = useState([]);
	const [ModalOpen, setModalOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	//순서1: {type:'mine'}값으로 Type 상태값 초기화
	const [Type, setType] = useState({ type: 'mine' });

	//처음 마운트가 위쪽의 상태값으로 data fetching및 반환
	const { data: Flickr } = useFlickrQuery(Type);
	console.log(Flickr);

	const customMotion = {
		init: { opacity: 0, x: 200 },
		active: { opacity: 1, x: 0 },
		end: { opacity: 0, x: -200 }
	};

	/*
	const fetchFlickr = async opt => {
		const baseURL = 'https://www.flickr.com/services/rest/';
		const method_mine = 'flickr.people.getPhotos';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';

		const flickr_api = import.meta.env.VITE_FLICKR_API;
		const myID = '201494903@N03';
		const num = 20;
		let url = '';

		const urlMine = `${baseURL}?method=${method_mine}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;
		const urlInterest = `${baseURL}?method=${method_interest}&api_key=${flickr_api}&per_page=${num}&nojsoncallback=1&format=json`;

		const urlSearch = `${baseURL}?method=${method_search}&api_key=${flickr_api}&per_page=${num}&nojsoncallback=1&format=json&tags=${opt.tag}`;

		opt.type === 'mine' && (url = urlMine);
		opt.type === 'interest' && (url = urlInterest);
		opt.type === 'search' && (url = urlSearch);

		const data = await fetch(url);
		const json = await data.json();
		setFlickr(json.photos.photo);
	};
	*/

	/*
	미션
	특정 검색어에 대한 결과값이 없을 시 화면에 검색결과없음 문구 출력
	*/
	const handleSearch = e => {
		e.preventDefault();
		if (!e.target[0].value.trim()) return alert('Please enter your keyword.');
		console.dir(e.target[0].value);
		setType({ type: 'search', tag: e.target[0].value });
		e.target[0].value = '';
	};

	useEffect(() => {
		// fetchFlickr(Type);

		ref_gallery.current.classList.remove('on');
		setTimeout(() => {
			ref_gallery.current.classList.add('on');
		}, 800);
	}, [Type]);

	useEffect(() => {
		document.body.style.overflow = ModalOpen ? 'hidden' : 'auto';
	}, [ModalOpen]);

	return (
		<>
			<Layout title={'GALLERY'}>
				<Content delay={1.5} customMotion={customMotion}>
					<article className='controller'>
						<ul className='type'>
							<li onClick={() => setType({ type: 'mine' })} className={(Type.type === 'mine' && 'on') || ''}>
								My Gallery
							</li>
							<li onClick={() => setType({ type: 'interest' })} className={(Type.type === 'interest' && 'on') || ''}>
								Interest Gallery
							</li>
						</ul>
						<form onSubmit={handleSearch}>
							<input type='text' placeholder='Please enter your keyword.' />
							<button>search</button>
						</form>
					</article>

					<section className='galleryList' ref={ref_gallery}>
						{/* {Flickr.map((data, idx) => { */}
						{Flickr?.map((data, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setModalOpen(true);
										setIndex(idx);
									}}>
									<Pic
										src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
										className='pic'
										shadow
									/>
								</article>
							);
						})}
					</section>
				</Content>
			</Layout>

			{ModalOpen && (
				<Modal setModalOpen={setModalOpen}>
					<Pic
						src={`https://live.staticflickr.com/${Flickr[Index].server}/${Flickr[Index].id}_${Flickr[Index].secret}_b.jpg`}
						shadow
					/>
				</Modal>
			)}
		</>
	);
}
