import Layout from '../common/Layout';
import memberData from '../../data/memberData';
import Pic from '../common/Pic';

export default function Members() {
	return (
		<Layout title={'MEMBERS'}>
			<article className='ceoBox'>
				<div className='txt'>
					<h2>{memberData[0].name}</h2>
					<p>{memberData[0].position}</p>
				</div>
				<Pic className='pic' src={'/' + memberData[0].pic} shadow />
			</article>

			<article className='memberListBox'>
				<div className='titBox'>
					<h2>Our Team Member</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iste accusantium! Eum corrupti voluptates
						natus! Harum dolorum reprehenderit modi nostrum?
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
		</Layout>
	);
}
