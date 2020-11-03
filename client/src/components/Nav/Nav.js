import Media from "../Media/Media";
import "./Nav.scss";

import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../icons/close-outline.svg";
import { useContext } from "react";
import { context } from "../../context";
import { TOGGLE_MENU } from "../../types";

export default function Nav() {
	const { stateMenu, dispatchMenu } = useContext(context);

	function menuHandler() {
		dispatchMenu({ type: TOGGLE_MENU });
	}

	return (
		<nav className={`nav ${stateMenu ? "nav--active" : ""}`}>
			<div className="nav__header" onClick={menuHandler}>
				<CloseIcon className="nav__close" />
			</div>
			<div className="nav__body">
				<ul>
					<li className="nav__list">
						<Link onClick={menuHandler} className="nav__link" to="/">
							home
						</Link>
					</li>
					<li className="nav__list">
						<Link onClick={menuHandler} className="nav__link" to="/collection">
							collection
						</Link>
					</li>
					<li className="nav__list">
						<Link onClick={menuHandler} className="nav__link" to="/about">
							our story
						</Link>
					</li>
					<li className="nav__list">
						<Link onClick={menuHandler} className="nav__link" to="/contact">
							contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="nav__footer">
				<Media />
			</div>
		</nav>
	);
}
