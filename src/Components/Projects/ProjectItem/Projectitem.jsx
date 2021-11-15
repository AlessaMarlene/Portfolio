import './Projectitem.css';

const Projectitem = ({project}) => {
    return(
        <div className="projectItem">
            <img alt="project" src={project.image}/>
            <h2>{project.name}</h2>
            <a href={project.link}>View site</a>
        </div>
    );
}

export default Projectitem;