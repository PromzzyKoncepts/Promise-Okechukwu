import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Proptypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HireMeModal = ({ show, handleClose }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleClose();
  // };

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

    handleClose();
  };

  const selectOptions = [
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Graphics/Branding',
  ];

  return (
    <>
      {!isSent ? (

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>What Project are you looking for?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Name or company name"
                  autoFocus
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select an Option</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedOption}
                  name="subject"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  custom
                >
                  <option value="">Select an option...</option>
                  {selectOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  name="message"
                  placeholder="Brief description of the project"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      ) : (
        <small style={{ color: '#d6d310' }}>Message Sent, I will get back to you!!</small>
      )}
    </>
  );
};

export default HireMeModal;
HireMeModal.propTypes = {
  show: Proptypes.bool.isRequired,
  handleClose: Proptypes.func.isRequired,
};
