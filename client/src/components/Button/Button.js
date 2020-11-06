import "./Button.scss";

export default function Button({
	top,
	bottom,
	children,
	onClick,
	isLoading = false,
}) {
	return (
		<button
			onClick={onClick}
			data-aos="fade-up"
			className="button"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			{isLoading ? <div className="button__loader"></div> : children}
		</button>
	);
}
