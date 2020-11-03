const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/", async (req, res) => {
	let transport = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: 587,
		secureConnection: false,
		tls: {
			ciphers: "SSLv3",
		},
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.USER_EMAIL_PASSWORD,
		},
	});

	transport.sendMail(
		{
			from: process.env.USER_EMAIL,
			to: process.env.USER_EMAIL,
			subject: `WORDOUTLET // New Client`,
			text: `${req.body.email} ${req.body.message}`,
		},
		function (err, info) {
			if (err) {
				console.log(`Error: ${err}`);
			} else {
				res.status(200).json({ message: "✔ Message has been sended" });
			}
			console.log(info);
		}
	);
});

module.exports = router;
