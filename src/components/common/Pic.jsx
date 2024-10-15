export default function Pic({ src, className, shadow = false, style }) {
	const shadowStyle = {
		width: '100%',
		height: '100%',
		objectFict: 'cover',
		position: 'absolute',
		top: 20,
		left: 20,
		filter: 'blur(20px)',
		opacity: 0.8
	};

	const picStyle = { width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 };

	return (
		<div style={{ position: 'relative', ...style }} className={className}>
			{shadow && <img style={shadowStyle} src={src} alt={src} />}
			<img style={picStyle} src={src} alt={src} />
		</div>
	);
}
