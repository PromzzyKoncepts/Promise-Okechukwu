import { useCountUp } from 'react-countup';
import CounterItem from './counterItem';
import '../assets/Stylesheets/about.css';

const AboutCounter = () => {
  useCountUp({ ref: 'experienceCounter', end: 3, duration: 3 });
  useCountUp({ ref: 'githubStarsCounter', end: 300, duration: 3 });
  useCountUp({ ref: 'feedbackCounter', end: 92, duration: 3 });
  useCountUp({ ref: 'projectsCounter', end: 50, duration: 3 });

  return (
    <div className="">
      <div className="counter-container">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Stars on GitHub"
          counter={<span id="githubStarsCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Projects completed"
          counter={<span id="projectsCounter" />}
          measurement="+"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
