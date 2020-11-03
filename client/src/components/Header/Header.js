import "./Header.scss";

import { Link } from "react-router-dom";

import { ReactComponent as BurgerIcon } from "../../icons/menu-outline.svg";
import { ReactComponent as BasketIcon } from "../../icons/basket.svg";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context";
import { TOGGLE_MENU } from "../../types";

export default function Header() {
	const { dispatchMenu, stateBasket } = useContext(context);
	const [scroll, setScroll] = useState(!!window.scrollY);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY) setScroll(true);
			else setScroll(false);
		}
		window.addEventListener("scroll", handleScroll);

		return function cleanup() {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function menuHandler() {
		dispatchMenu({ type: TOGGLE_MENU });
	}

	return (
		<header className={`header ${scroll ? "header--fill" : ""}`}>
			<div className="header__burger" onClick={menuHandler}>
				<BurgerIcon className="header__icon" />
			</div>
			<Link className="header__logo" to="/">
				<img
					src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
					alt="page logo"
				/>
			</Link>
			<Link className="header__basket" to="/basket">
				<BasketIcon className="header__icon" />
				{stateBasket.length > 0 && (
					<div className="header__count">{stateBasket.length}</div>
				)}
			</Link>
		</header>
	);
}
