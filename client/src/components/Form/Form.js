import "./Form.scss";
import { useState } from "react";
import Button from "../Button/Button";
import useHttp from "../../hooks/http.hook";

export default function Form({ top, bottom }) {
	const { request } = useHttp();
	const [serverAnswer, setSeverAnswer] = useState({ message: "" });
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
	});

	function formValidator() {
		if (!form.name) {
			setErrors({ ...errors, name: "Fill in the name field" });
			return false;
		} else {
			setErrors({ ...errors, name: "" });
			return true;
		}
		if (!form.email) {
			setErrors({ ...errors, email: "Fill in the email field" });
			return false;
		} else {
			setErrors({ ...errors, email: "" });
			return true;
		}
	}

	async function formHandler(event) {
		event.preventDefault();
		setSeverAnswer({ message: "" });
		if (formValidator()) {
			setSeverAnswer(
				await request("/api/mail", "POST", {
					name: form.name,
					email: form.email,
					message: form.message,
				})
			);
		}
	}

	return (
		<form
			onSubmit={formHandler}
			className="form"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			<div className="form__container">
				<div className="form__header" data-aos="fade-up">
					<label htmlFor="name" className="form__label">
						Name*
					</label>
					<div className="form__error">{errors.name && errors.name}</div>
				</div>
				<input
					id="name"
					type="text"
					value={form.name}
					data-aos="fade-up"
					className="form__input"
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>

				<div className="form__header" data-aos="fade-up">
					<label htmlFor="mail" className="form__label">
						Email*
					</label>
					<div className="form__error">{errors.email && errors.email}</div>
				</div>
				<input
					required
					id="mail"
					type="mail"
					data-aos="fade-up"
					value={form.email}
					className="form__input"
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>

				<div className="form__header" data-aos="fade-up">
					<label htmlFor="message" className="form__label">
						Message
					</label>
				</div>
				<textarea
					id="message"
					data-aos="fade-up"
					value={form.message}
					className="form__input"
					onChange={(e) => setForm({ ...form, message: e.target.value })}
				></textarea>

				<div className="form__footer">
					<Button data-aos="fade-up">Submit</Button>
					{serverAnswer.message && (
						<div className="form__answer" data-aos="fade-up">
							{serverAnswer.message}
						</div>
					)}
				</div>
			</div>
		</form>
	);
}
