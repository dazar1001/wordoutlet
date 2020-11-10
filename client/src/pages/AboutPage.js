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
				<title>WORDOUTLET | Our story</title>
			</Helmet>
			<Header />
			<Nav />
			<main>
				<Head>Our Story</Head>
				<Container top="120px" height="2">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32.
				</Container>
			</main>
			<Footer top="120px" />
		</>
	);
}
