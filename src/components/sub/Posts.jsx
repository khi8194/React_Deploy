import axios from 'axios';
import Content from '../common/Content';
import Layout from '../common/Layout';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
	const [Posts, setPosts] = useState([]);
	
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/posts').then(res => {
			console.log(res.data);
			setPosts(res.data);
		});
	}, []);
		
	return (
		<Layout title={'POSTS'}>
			<button>
				<Link to='/post-add'>Write Post</Link>
			</button>
			{Posts.map(post => {
				return (
					<h3 key={post.id}>
						{/* <Link to={`/detail/${post.slug}`}>{post.title}</Link> */}
						<Link to={`/post/${post.slug}`}>{post.title}</Link>
					</h3>
				);
			})}
			<Content delay={1}>
				{/* <p>Posts Page contents come here.</p> */}
			</Content>
		</Layout>
	);
}
