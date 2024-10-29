import Layout from "../common/Layout";

export default function PostAdd() {
	return (
		<Layout title='Add Post'>
			<form>
				<input type='text' name='title' id='title' placeholder='제목입력하세요.' />
				<br />
				<textarea name='body' id='body' placeholder='본문을 입력하세요'></textarea>
				<br />
				<input type='reset' value='취소' />
				<input type='submit' value='전송' />
			</form>
		</Layout>
	);
}