export default function Modal({ children }) {
	return (
		<aside className='modal'>
			{/* {children} */}
			<div className='con'>{children}</div>
			<button className='btnClose'>CLOSE</button>
		</aside>
	);
}
