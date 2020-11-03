import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Invite from "../components/Invite/Invite";
import Info from "../components/Info/Info";

export default function HomePage() {
	const [products, setProducts] = useState([]);
	const { request } = useHttp();

	useEffect(() => {
		(async function () {
			setProducts(await request("/api/products"));
		})();
		window.scrollTo(0, 0);
	}, [request]);

	return (
		<>
			<Helmet>
				<title>WORDOUTLET</title>
			</Helmet>
			<Header />
			<Nav />

			<main>
				<Hero bottom="120px" />
				<Products products={products} />
				<Invite
					cover="img/products/single-prod.jpg"
					top="120px"
					head="The way to get started is to quit talking and begin doing. Get started with our tools and boost your productivity."
				/>
				<Info
					top="120px"
					link="/about"
					value="LEARN MORE"
					head="Do not wait; the time will never be 'jsut right'. Start where you stand, and work with whatever tool you may have at your command, and better tools will be found as you go along."
				/>
			</main>

			<Footer top="180px" />
		</>
	);
}
