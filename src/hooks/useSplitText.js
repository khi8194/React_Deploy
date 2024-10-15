export default function useSplitText() {
	return (ref, option) => {
		if (!ref) return console.error('첫번째 인수로는 참조객체값이 와야 됩니다.');
		const default_option = { interval: 0, delay: 0 };
		const result_option = { ...default_option, ...option };

		let text = ref.current.innerText;
		let tags = '';
		let count = 0;

		for (let letter of text) {
			tags += `<span style='display:inline-block; transition-duration:0.5s; transition-delay:${
				count * result_option.interval + result_option.delay
			}s'>${letter}</span>`;
			count++;
		}

		ref.current.innerHTML = tags;

		setTimeout(() => {
			ref.current.classList.add('on');
		}, 100);
	};
}
