import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../partials/Button';
import FormInput from '../partials/FormInput';

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6hu8kxc', 'template_acct32f', form.current, 'yhGr4mjp3VUIWMKZY')
      .then((result) => {
        // console.log(result.text);
        // console.log('message sent!');
        setIsSent(true);
      }, (error) => {
        // console.log(error.text);
      });
  };

  return (
    <div className="form">
      <div className="">
        {!isSent ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className=""
          >
            <h3 className="">
              Contact Me
            </h3>
            <FormInput
              inputType="text"
              inputId="name"
              inputName="from_name"
              placeholderText="Your Name"
              ariaLabelName="Name"
            />
            <FormInput
              inputType="email"
              inputId="email"
              inputName="user_email"
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
              />
            </div>

            <div className="form-btn">
              <Button
                title="Send Message"
                type="submit"
                aria-label="Send Message"
              />
            </div>
          </form>
        ) : (
          <h4 style={{ color: '#d6d310', padding: 20 }}>Your message has been sent. Thank you for reaching out!</h4>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
