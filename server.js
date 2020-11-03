const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/products", require("./routes/products.routes"));
app.use("/api/media", require("./routes/media.routes"));
app.use("/api/mail", require("./routes/mail.routes"));

// for heroku
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"), function (
		err
	) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

async function connect() {
	try {
		await mongoose.connect(
			process.env.DB_CONNECTION,
			{
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			() => console.log("✔ Connected to DB")
		);
		app.listen(PORT, () =>
			console.log(`✔ Server has been started on port ${PORT}...`)
		);
	} catch (err) {
		console.log(`❌ DB error: ${err.message}`);
	}
}
connect();
