import Button from '../partials/Button';
import FormInput from '../partials/FormInput';

const ContactForm = () => {
	return (
		<div className="form">
			<div className="">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className=""
				>
					<h3 className="">
						Contact Form
					</h3>
					<FormInput
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="">
						<textarea
							className="input"
							id="message"
							name="message"
							placeholder="Enter a message"
							aria-label="Message"
						></textarea>
					</div>

					<div className="form-btn">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
