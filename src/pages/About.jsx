import FollowMe from '../partials/follow';
import '../assets/Stylesheets/about.css';
import { aboutInfo } from '../Data/aboutData';
import promiseLight from '../assets/images/promise-light.png';
import AboutCounter from '../hooks/aboutCounter';
import Testimonial from '../partials/Testimonials';
import { FiArrowDownCircle } from 'react-icons/fi';

const About = () => (
  <div className="about-container">
    <div className="about">
      <div>
        <img src={promiseLight} className="about-image" />
      </div>
      <div>
        {aboutInfo.map((info) => (
          <p key={info.id}>{info.bio}</p>
        ))}
        <a
          download="Promise-resume.pdf"
          href="/files/Promise-resume.pdf"
          className="download"
          aria-label="Download Resume"
        >
          <FiArrowDownCircle className="" />
          <span className="">
            Download CV
          </span>
        </a>
      </div>
    </div>
    <AboutCounter />
    <Testimonial />

    <div className="follow-me">
      <h4>Please follow Me</h4>
      <FollowMe />
    </div>
  </div>
);
export default About;
