import ProjectList from "./ProjectList";

const ProjectListContainer = () => {
    return (
      <>
        <div className='flex-wrap mx-auto text-xl md:text-6xl lg:text-6xl'>
          <h2 className='text-center font-medium'>Projects</h2>
          <div className='flex flex-col basis-1/4 p-4 md:flex-row md:gap-8 lg:flex-row lg:p-8'>
             <ProjectList/>
          </div>
        </div>
      </>
    );


}

export default ProjectListContainer;