export default function Container({ children, top, bottom, width, height }) {
	return (
		<div
			style={{
				margin: `${top || 0} auto ${bottom || 0} auto`,
				maxWidth: width || "820px",
				lineHeight: height || "1.5",
			}}
			className="container"
		>
			{children}
		</div>
	);
}
