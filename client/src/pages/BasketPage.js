import { Helmet } from "react-helmet";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Check from "../components/Check/Check";
import { useContext, useEffect } from "react";
import { context } from "../context";

export default function BasketPage() {
	const { stateBasket } = useContext(context);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>WORDOUTLET | Basket</title>
			</Helmet>
			<Header />
			<Nav />
			<Check products={stateBasket} top="150px" />
			<Footer top="200px" />
		</>
	);
}
