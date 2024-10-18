// import { useGlobalState } from '../../hooks/useGlobal';
import { ACTIONS, useGlobalDispatch } from '../../hooks/useGlobal';
import { motion } from 'framer-motion';

// export default function Modal({ children, setModalOpen }) {
export default function Modal({ children }) {
	// const { dispatch } = useGlobalState();
	// const { dispatch } = useGlobalDispatch;
	const { dispatch } = useGlobalDispatch();
	return (
		// <aside className='modal'>
		<motion.aside className='modal'>
			<div className='con'>{children}</div>
			{/* <button className='btnClose' onClick={() => dispatch({ type: 'CLOSE_MODAL' })}> */}
			<button className='btnClose' onClick={() => dispatch({ type: ACTIONS.SET_MODAL_CLOSE })}>
				CLOSE
			</button>
			{/* </aside> */}
		</motion.aside>
	);
}
