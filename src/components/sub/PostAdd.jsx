import Layout from "../common/Layout";

export default function PostAdd(){

  return <Layout title='postAdd'>
    <form>
      <input type="text" name="title" id="title" placeholder="제목을 입력하세요."/>
      <br/>
      <textarea name="body" id="body" placeholder="본문을 입력하세요."/>
      <br/>

      <input type="reset" value='취소'/>
      <input type="submit" value='전송'/>
    </form>
  </Layout>
}