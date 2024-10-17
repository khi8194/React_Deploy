import { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import Modal from '../common/Modal';
import Content from '../common/Content';
import { useFlickrQuery } from '../../hooks/useFlickr';
import { useGlobalState } from '../../hooks/useGlobal';

export default function Gallery() {
	console.log('gallery');
	const { store, dispatch } = useGlobalState();
	//순서1 - 커스텀훅을 통해 전역관리되는 상태값인 ModalOpen, setModlOpen 가져옴
	// const { ModalOpen, setModalOpen } = useGlobalState();
	const ref_gallery = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Type, setType] = useState({ type: 'mine' });
	const { data: Flickr } = useFlickrQuery(Type);
	// console.log(Flickr);

	const customMotion = {
		init: { opacity: 0, x: 200 },
		active: { opacity: 1, x: 0 },
		end: { opacity: 0, x: -200 }
	};

	const handleSearch = e => {
		e.preventDefault();
		if (!e.target[0].value.trim()) return alert('Please re-enter your keyword.');
		console.dir(e.target[0].value);
		setType({ type: 'search', tag: e.target[0].value });
		e.target[0].value = '';
	};

	useEffect(() => {
		ref_gallery.current.classList.remove('on');
		setTimeout(() => {
			ref_gallery.current.classList.add('on');
		}, 800);
	}, [Type]);

	useEffect(() => {
		// document.body.style.overflow = ModalOpen ? 'hidden' : 'auto';
		// }, [ModalOpen]);
		document.body.style.overflow = store.isModal ? 'hidden' : 'auto';
	}, [store.isModal]);

	return (
		<>
			<Layout title={'GALLERY'}>
				<Content delay={1.5} customMotion={customMotion}>
					<article className='controller'>
						<ul className='type'>
							{/* className을 조건처리할때는 &&연산자 사용불가 : className에는 boolean이 아닌 문자값이 와야됨 */}
							<li onClick={() => setType({ type: 'mine' })} className={Type.type === 'mine' ? 'on' : ''}>
								My Gallery
							</li>
							<li onClick={() => setType({ type: 'interest' })} className={Type.type === 'interest' ? 'on' : ''}>
								Interest Gallery
							</li>
						</ul>
						<form onSubmit={handleSearch}>
							<input type='text' placeholder='Please enter your keyword.' />
							<button>search</button>
						</form>
					</article>

					<section className='galleryList' ref={ref_gallery}>
						{Flickr?.length === 0 && <p>No results found for your search.</p>}
						{Flickr?.map((data, idx) => {
							return (
								//순서2-각 article요소에 전역에서 가져온 setModalOpen상태변경함수 호출
								<article
									key={idx}
									onClick={() => {
										// setModalOpen(true);
										dispatch({ type: 'OPEN_MODAL' });
										setIndex(idx);
									}}>
									<Pic
										src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
										className='pic'
										shadow
									/>
									{/* <h3>{data.title}</h3> */}
								</article>
							);
						})}
					</section>
				</Content>
			</Layout>

			{/* 순서3- 상태변경함수를 통해서 ModalOpen 전역상태값 변경시 Modal 컴포넌트 마운트 */}
			{/* {ModalOpen && ( */}
			{store.isModal && (
				<Modal>
					<Pic
						src={`https://live.staticflickr.com/${Flickr[Index].server}/${Flickr[Index].id}_${Flickr[Index].secret}_b.jpg`}
						shadow
					/>
				</Modal>
			)}
		</>
	);
}
