import ProjectList from "./ProjectList";
import projects from "../../../data/projects";

const ProjectListContainer = () => {
    return (
      <>
        <div className='flex-wrap mx-auto text-xl md:text-6xl lg:text-6xl'>
          <h2 className='text-center font-medium'>Projects</h2>
          <div className='flex flex-col basis-1/4 p-4 md:flex-row md:gap-8 lg:flex-row lg:p-8'>
             {projects && projects.map((project) => (
              <ProjectList key={project.id} project={project} />
             ))}
          </div>
        </div>
      </>
    );


}

export default ProjectListContainer;