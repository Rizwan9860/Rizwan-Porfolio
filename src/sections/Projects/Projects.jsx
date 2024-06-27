import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.jpeg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/"
          h3="Tesla"
          p="Car Store"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/"
          h3="Magic Property"
          p="Hotel Booking App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/"
          h3="Clothing"
          p="Clothing Shop"
        />
        
      </div>
    </section>
  );
}

export default Projects;
