import Layout from '../common/Layout';
import memberData from '../../data/memberData';
import Pic from '../common/Pic';
import MaskBox from '../common/MaskBox';
import MaskText from '../common/MaskText';
import Content from '../common/Content';

export default function Members() {
	console.log('Members');

	return (
		<Layout title={'MEMBERS'}>
			<MaskText delay={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad?</MaskText>
			<br />
			<MaskText delay={1.5} style={{ marginBottom: 80 }}>
				Lorem ipsum dolor
			</MaskText>

			<Content delay={1}>
				<article className='ceoBox'>
					<div className='txt'>
						<h2>{memberData[0].name}</h2>
						<p>{memberData[0].position}</p>
					</div>

					<MaskBox className='picWrapper' style={{ width: '50%', height: '65vh' }} delay={1}>
						<Pic style={{ width: '100%', height: '100%' }} src={'/' + memberData[0].pic} />
					</MaskBox>
				</article>

				<article className='memberListBox'>
					<div className='titBox'>
						<h2>Our Team Member</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iste accusantium! Eum corrupti
							voluptates natus! Harum dolorum reprehenderit modi nostrum?
						</p>
					</div>

					<ul>
						{memberData.map((member, idx) => {
							if (idx !== 0) {
								return (
									<li key={idx}>
										<Pic src={member.pic} className='pic' shadow={true} />
										<div className='txt'>
											<h2>{member.name}</h2>
											<p>{member.position}</p>
										</div>
									</li>
								);
							}
						})}
					</ul>

					<div className='descBox'>
						<h2>Lorem ipsum dolor sit.</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. A esse cupiditate, vitae deleniti repellat
							explicabo sit, corrupti beatae dicta, nulla optio corporis alias. Perferendis quidem sapiente minima,
							quisquam inventore soluta.
						</p>
					</div>
				</article>
			</Content>
		</Layout>
	);
}
