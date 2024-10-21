import { useRef } from 'react';
import { useState } from 'react';

export default function useDebounce(state, interval = 500) {
	const [Debounced, setDebounced] = useState(state);
	const ref_timer = useRef(null);

	clearTimeout(ref_timer.current);

	ref_timer.current = setTimeout(() => {
		setDebounced(state);
	}, interval);

	return Debounced;
}
