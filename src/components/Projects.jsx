import { BsEyeFill, BsGithub } from 'react-icons/bs';
import projectData from '../Data/projectData';
import '../assets/Stylesheets/Projects.css';

const Projects = () => (
  <div className="project-container">
      <h2>My Projects</h2>
      <div className="card-container">
        {projectData.map((item) => (
          <div className="project-card" key={item.id}>
            <img src={item.image} />
            <h4>
              {item.name}
              {' '}
            </h4>
            <div className="tech">
              {item.technologies.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
            <div>
              <a href={item.demo} className="view" target="_blank" rel="noreferrer"><BsEyeFill /></a>
              <a href={item.github} className="view" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
          </div>
        ))}
      </div>
  </div>
);
export default Projects;
