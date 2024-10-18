// import { ACTIONS, useGlobalDispatch } from '../../hooks/useGlobal';
import { motion } from 'framer-motion';
import { useZustandStore } from '../../hooks/useZustand';

export default function Modal({ children }) {
	console.log('modal');
	// const { dispatch } = useGlobalDispatch();
	const { setModalClose } = useZustandStore();

	return (
		<motion.aside className='modal'>
			<div className='con'>{children}</div>
			{/* <button className='btnClose' onClick={() => dispatch({ type: ACTIONS.SET_MODAL_CLOSE })}> */}
			<button className='btnClose' onClick={setModalClose}>
				CLOSE
			</button>
		</motion.aside>
	);
}
