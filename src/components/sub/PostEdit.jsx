import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function PostEdit() {
	const { slug } = useParams();
	const [Data, setData] = useState(null);
	const navigate = useNavigate();

	// 수정폼요소가 담길 참조 객체
	const ref_title = useRef(null);
	const ref_body = useRef(null);

	// 수정 버튼 클릭시 호출될 수정 함수
	const handleSubmit = e => {
		e.preventDefault();

		//수정 폼 안쪽에 있는 데이터를 가져와 객체로 담아둠
		const editData = {
			title: ref_title.current.value,
			body: ref_body.current.value
		};

		//axiosdptj put 요청으로 수정할 객체값과 같이 전달
		axios
			.put(`http://localhost:8000/posts/${slug}/`, editData)
			.then(res => {
				console.log(res);
				// 수정이 완료되면 강제로 포스트 목록 페이지 컴포넌트로 이동
				navigate('/post');
			})
			.catch(err => console.log(err));
	};

	//컴포넌트 마운트시 슬러그값을 이용해 get 방식으로 수정할 데이터 가져옴
	useEffect(() => {
		axios
			.get(`http://localhost:8000/posts/${slug}`)
			.then(res => {
				setData(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		// 처음 마운트시 수정할 데이터를 폼요소 안쪽에 넣어줌
		// 이때 value속성이 아닌 defaultValue속성을 지정한 이유
		// valaue속성을 연결시에는 무조건 onChange이벤트가 같이 전달되야 하기 때문
		<Layout title='Edit Post'>
			<form onSubmit={handleSubmit}>
				<input ref={ref_title} type='text' defaultValue={Data?.title} />
				<br />
				<textarea ref={ref_body} defaultValue={Data?.body}></textarea>
				<br />
				<input type='reset' value='수정취소' />
				<input type='submit' value='수정' />
			</form>
		</Layout>
	);
}