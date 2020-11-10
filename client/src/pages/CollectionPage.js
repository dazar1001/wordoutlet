import { useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";
import { Helmet } from "react-helmet";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Invite from "../components/Invite/Invite";
import Info from "../components/Info/Info";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

export default function CollectionPage() {
	const { request } = useHttp();
	const [bestSelling, setBestSelling] = useState([]);
	const [fresh, setFresh] = useState([]);

	useEffect(() => {
		(async function () {
			setBestSelling(await request("/api/products/sort/sales"));
			setFresh(await request("/api/products/sort/date"));
		})();
		window.scrollTo(0, 0);
	}, [request]);

	return (
		<>
			<Helmet>
				<title>WORDOUTLET | Collection</title>
			</Helmet>
			<Header />
			<Nav />
			<main>
				<Products top="160px" products={bestSelling} head="Best sellers" />
				<Invite
					cover="img/products/single-prod.jpg"
					top="120px"
					head="The way to get started is to quit talking and begin doing. Get started with our tools and boost your productivity."
				/>
				<Products top="120px" products={fresh} head="Latest collection" />
				<Info
					top="120px"
					link="/about"
					value="LEARN MORE"
					head="Do not wait; the time will never be 'jsut right'. Start where you stand, and work with whatever tool you may have at your command, and better tools will be found as you go along."
				/>
			</main>

			<Footer top="120px" />
		</>
	);
}
