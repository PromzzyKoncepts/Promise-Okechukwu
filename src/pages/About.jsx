import { FiArrowDownCircle } from 'react-icons/fi';
import FollowMe from '../partials/follow';
import '../assets/Stylesheets/about.css';
import { aboutInfo } from '../Data/aboutData';
import promiseDark from '../assets/images/promise-dark.png';
import AboutCounter from '../hooks/aboutCounter';
import Testimonial from '../partials/Testimonials';

const About = () => (
  <div className="about-container">
    <div className="about">
      <div>
        <img src={promiseDark} alt="myself" className="about-image" />
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
