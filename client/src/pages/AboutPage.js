import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head/Head";
import Container from "../components/Container/Container";

export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>WORDOUTLET // Our story</title>
			</Helmet>
			<Header />
			<Nav />
			<main>
				<Head>Our Story</Head>
				<Container top="120px">Lorem</Container>
			</main>
			<Footer top="120px" />
		</>
	);
}
