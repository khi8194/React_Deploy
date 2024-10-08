export default function useSplitText() {
	return (ref, interval = 0, delay = 0) => {
		let text = ref.current.innerText;
		let tags = '';
		let count = 0;

		for (let letter of text) {
			tags += `<span style='display:inline-block; transition-duration:0.5s; transition-delay:${
				count * interval + delay
			}s'>${letter}</span>`;
			count++;
		}

		ref.current.innerHTML = tags;

		setTimeout(() => {
			ref.current.classList.add('on');
		}, 100);
	};
}
//미션 - 위와 같이 함수를 제작시 문제점
