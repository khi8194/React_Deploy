export default function ColorSelector() {
	//black: 40,40,40;
	//hotpink: 184, 0, 190;
	//blue: 0, 120, 150;
	//green: 3, 58, 23;
	const colors = ['40,40,40', '184, 0, 190', '0, 120, 150', '3, 58, 23'];

	const outerStyle = { display: 'flex', gap: 10, position: 'fixed', left: '5vw', bottom: '10vh', zIndex: 6 };
	const btnStyle = { width: 15, height: 15, borderRadius: '50%', cursor: 'pointer', border: 'none' };
	const changeColor = color => {
		document.documentElement.style.setProperty('--keyRGB', color);
	};
	return (
		<nav style={outerStyle}>
			{colors.map(color => (
				<button
					onClick={() => changeColor(color)}
					key={color}
					style={{ ...btnStyle, backgroundColor: `rgb(${color})` }}></button>
			))}
		</nav>
	);
}
