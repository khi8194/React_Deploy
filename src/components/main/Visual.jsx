// import { useYoutubeQuery } from '../../hooks/useYoutube';
import { useFlickrQuery } from '../../hooks/useFlickr';
import Pic from '../common/Pic';

export default function Visual() {
	// const { data } = useYoutubeQuery();
	const { data } = useFlickrQuery({ type: 'mine' });
	// const { data } = useFlickrQuery();
	return (
		<figure className='visual'>
			<div style={{ display: 'flex', gap: 40 }}>
				{/* {data?.map((vid, idx) => { */}
				{data?.map((pic, idx) => {
					if (idx >= 3) return null;
					return (
						<article key={idx}>
							{/* <Pic src={vid.snippet.thumbnails.high.url} style={{ width: 400, height: 200 }} shadow /> */}
							<Pic
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`}
								style={{ width: 400, height: 200 }}
								shadow
							/>
						</article>
					);
				})}
			</div>
		</figure>
	);
}
