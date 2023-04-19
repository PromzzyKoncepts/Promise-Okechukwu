import Slide from 'react-reveal/Slide';
import skillsData from '../Data/skillsData';
import '../assets/Stylesheets/Skills.css';

const Skills = () => (
  <Slide left>
    <div className="skill-container">
      <h2>Skills, Languages and Frameworks</h2>
      <div className="skill-cards">
        {skillsData.map((item) => (
          <div className="card" key={item.id}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Slide>

);
export default Skills;
