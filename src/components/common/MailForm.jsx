import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function MailForm() {
	const ref_form = useRef(null);
	const ref_name = useRef(null);
	const ref_email = useRef(null);
	const ref_msg = useRef(null);

	const resetForm = () => {
		[ref_name, ref_email, ref_msg].forEach(dom => (dom.current.value = ''));
	};

	const sendForm = e => {
		e.preventDefault();
		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, ref_form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(res => {
				alert('문의내용이 관리자에 전달되었습니다.');
				console.log(res);
				resetForm();
			});
	};

	return (
		<article className='mailForm'>
			<div className='formBox'>
				<form onSubmit={sendForm} ref={ref_form}>
					<div className='upper'>
						<span>
							<label htmlFor='uName'>Name</label>
							<input ref={ref_name} type='text' id='uName' placeholder='Leave your name' />
						</span>
						<span>
							<label htmlFor='uMail'>E-Mail</label>
							<input ref={ref_email} name='user_email' type='text' id='uMail' placeholder='Leave your email' />
						</span>
					</div>

					<div className='lower'>
						<label htmlFor='msg'>Message</label>
						<textarea ref={ref_msg} name='message' id='msg' placeholder='Leave your message'></textarea>
					</div>

					<nav className='btnSet'>
						<input type='reset' value='Cancel' />
						<input type='submit' value='Send' />
					</nav>
				</form>
			</div>

			<div className='info'>
				<h2>Information</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit laudantium cupiditate qui?
					Possimus sint eum obcaecati ut cum ea, praesentium temporibus, quos vel beatae vero esse quisquam expedita
					animi.
				</p>
				<br />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, sequi ipsum. Deleniti nesciunt rerum ex!
				</p>
			</div>
		</article>
	);
}
