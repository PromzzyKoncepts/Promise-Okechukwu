import Zoom from 'react-reveal/Zoom';
import { BsEyeFill, BsGithub } from 'react-icons/bs';
import projectData from '../Data/projectData';
import '../assets/Stylesheets/Projects.css';

const Projects = () => (
  <div className="project-container">
    <Zoom right>
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
              <a href={item.demo} className="view"><BsEyeFill /></a>
              <a href={item.github} className="view"><BsGithub /></a>
            </div>
          </div>
        ))}
      </div>
    </Zoom>
  </div>
);
export default Projects;
