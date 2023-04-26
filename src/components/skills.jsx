import skillsData from '../Data/skillsData';
import '../assets/Stylesheets/Skills.css';

const Skills = () => (
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

);
export default Skills;
