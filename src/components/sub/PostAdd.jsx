import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Layout from "../common/Layout";
import axios from "axios";

export default function PostAdd() {
  const navigate = useNavigate();
  const ref_title = useRef(null);
  const ref_body = useRef(null);
  const ref_category = useRef(null);

  const handleSubmit = e => {
    // 리액트스럽게 스테이트값을 받아서 할 수 있음
    e.preventDefault();

    if(!ref_title.current.value || !ref_body.current.value)
      return alert('제목, 본문은 필수입력 항목입니다.');

    const postData = {
      title: ref_title.current.value,
      body: ref_body.current.value,
      category: ref_category.current.value
    };
    console.log(postData);
    
    axios
      .post('http://localhost:8000/posts', postData)
      .then(res => {
				console.log(res);
				navigate('/post');
			})
			.catch(err => console.log(err));
	};

	return (
		<Layout title='Post Detail'>
			<form onSubmit={handleSubmit}>
				<input ref={ref_title} type='text' name='title' id='title' placeholder='제목입력하세요.' />
				<br />
				<textarea ref={ref_body} name='body' id='body' placeholder='본문을 입력하세요'></textarea>
				<br />
				<select name='category' id='category' ref={ref_category}>
					<option value='PERSONAL'>Personal</option>
					<option value='BUSINESS'>Busniness</option>
					<option value='IMPORTANT'>Important</option>
				</select>

        <br />

				<input type='reset' value='취소' />
				<input type='submit' value='전송' />
			</form>
		</Layout>
	);
}