import "./Button.scss";

export default function Button({ top, bottom, children, onClick }) {
	return (
		<button
			onClick={onClick}
			data-aos="fade-up"
			className="button"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			{children}
		</button>
	);
}
