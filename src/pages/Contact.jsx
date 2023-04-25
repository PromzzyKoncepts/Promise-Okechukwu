import { motion } from 'framer-motion';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import '../assets/Stylesheets/contact.css';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.1,
    }}
    className="contact-div"
  >
    <div className="contact">
      <ContactForm />
      <ContactDetails />
    </div>
  </motion.div>
);

export default Contact;
