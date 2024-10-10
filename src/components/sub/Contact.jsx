/*
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';

export default function Contact() {
	const [Data, setData] = useState([]);

	useEffect(() => {
		fetch('/data.json')
			.then(data => data.json())
			.then(json => {
				console.log(json);
				setData(json.data);
			});
	}, []);

	return (
		<Layout title={'CONTACT'}>
			{Data.map((data, idx) => {
				return (
					<article key={idx}>
						<h2>{data.name}</h2>
					</article>
				);
			})}
		</Layout>
	);
}
*/

import Content from '../common/Content';
import Layout from '../common/Layout';
import MailForm from '../common/MailForm';

export default function Contact() {
	return (
		<Layout title={'CONTACT'}>
			<Content delay={1}>
				{/* <p>Contact Page description comes here.</p> */}
				<MailForm />
			</Content>
		</Layout>
	);
}
