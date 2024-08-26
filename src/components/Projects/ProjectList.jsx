const ProjectList = (props) => {
  const { projectName, url, beta, isLive, appDescription, techStack } = props.project;

  return (
    <>
        <h1>{projectName}</h1>
        {isLive ? (
          <p>Check it out {beta ? "out the beta": ""} at  <a href={url} target="_blank" rel="noreferrer">here</a></p>
        ) : (
          <p>Check out the code progress at <a>GitHub</a></p>
        )}
        
    </>
  );
}

export default ProjectList;