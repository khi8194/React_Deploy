import { useParams } from 'react-router-dom';
import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostEdit() {
  const {slug} = useParams();
  const [Data, setData] = useState(null);
  
  const handleSubmit = e => {
		e.preventDefault();
	};

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${slug}`).then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

	return (
    <Layout title='Edit Post'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={Data?.title} />
        <br />
        <textarea value={Data?.body}></textarea>
        <br />
        
        <input type='reset' value='수정취소' />
        <input type='submit' value='수정' />
      </form>
      
    </Layout>
  );
}