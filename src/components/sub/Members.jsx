import Layout from '../common/Layout';
import memberData from '../../data/memberData';
import Pic from '../common/Pic';
import { useRef } from 'react';

/*
참조객체에 가상돔을 담아 활용하는 패턴
1. useRef로 빈 참조객체 생성
2. 원하는 가상돔요소 (JSX El) ref속성으로 참조객체 연결
3. 참조객체명.current로 해당요소를 가져와서 제어
*/

export default function Members() {
	//useRef를 통해서 초기값이 null이 있는 빈 참조 객체를 생성
	const pEl = useRef(null);
	console.log(pEl);

	//h2가상돔 요소 클릭
	const changeColor = () => {
		console.log(pEl);

		//changeColor함수가 호출되는 순간 가상돔요소를 찾는 것이 아닌
		//이전 랜더링 사이클때 변환된 리얼돔을 직접 가져와서 스타일 변경
		//이처럼 가상돔이 아닌 이전 랜더링 타임에 생성된 리얼돔을 직접 제어하면 안되는 이유
		//문제점1: (리액트에서 중요한 정보로 취급하는) state와 연관이 없는 일반 DOM요소를 제어하기 때문에 추후 데이터 추적 불가능
		//문제점2: 현재 랜더링 사이클에서 다루고 있는 최신 요소가 아닌 이전 랜더링때 생성된 요소를 다루기 때문에 잘못된 예전 데이터를 다루게 됨
		// const pEl = document.querySelector('.titBox p');
		// pEl.style.color = 'red';
		//참조객체의 가상돔을 제어하면 현재 랜더링 사이클의 최신 가상돔 정보를 제어 가능
		pEl.current.style.color = 'red';
	};

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
					<h2 onClick={changeColor}>Our Team Member</h2>
					{/* <h2>Our Team Member</h2> */}

					{/* 미리 생성한 빈 참조객체에 담고 싶은 가상돔요소에 ref속성으로 연결 */}
					{/* <p> */}
					<p ref={pEl}>
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
