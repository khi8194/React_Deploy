import Layout from '../common/Layout';
// import Title from '../common/Title';
import memberData from '../../data/memberData';

export default function Members() {
	console.log(memberData);
	return (
		<Layout title={'MEMBERS'}>
			{/* <p>Members Page contents come here.</p> */}

			{/* 
			<div className="pic">
				<img src="이미지" alt="" />
			</div>
			<div className="txt">
				<h2>사람 이름</h2>
				<p>직책</p>
			</div> */}

			{/* 미션: 위의 구조로 반복 출력하도록 배열과 .map 함수를 이용해서 구현 */}

			{memberData.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={'/' + member.pic} alt={member.name} />
						</div>
						<div className='txt'>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
