import {Link} from 'react-router-dom';
import Projectitem from './ProjectItem/Projectitem';
import projects from '../../data/projects';
import './Projects.css';

const Projects = () => {
    return(
        <div className="projectsWrapper">
            <Link to="/personalInfo">Back to Presentation</Link>
            <div className="projects">
                {projects.map((project) => <Projectitem project={project}/>)}
            </div>
        </div>
    );
}

export default Projects;