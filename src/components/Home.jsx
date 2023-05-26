import { useEffect, useState } from "react";
import { client } from "../../client";
import ResumeList from "./ResumeListContainer";

const Home = () => {
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "resume"] | order(startDate desc)`)
      .then((data) => setJobList(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className='flex items-start justify-center min-h-full md:min-h-[66vh] p-4 md:p-6 lg:p-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <div className='title p-4'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl'>
                Hello! <br /> My name is Diego
              </h1>
            </div>
            <div className='intro font-light text-gray-600 text-lg md:text-xl lg:text-2xl'>
              <p>
                I am an{" "}
                <span className='underline'>
                  {" "}
                  experienced Full Stack Software Engineer
                </span>{" "}
                based in Brooklyn, NY.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col md:flex-row lg:flex-row items-center  p-4 md:p-6 lg:p-16 '> */}
      <div className='container mx-auto text-lg md:text-xl lg:text-2xl'>
        <h2 className='text-center'>Past Experiences</h2>
        <div className=''>
          <div className='flex flex-col md:flex-row lg:flex-row items-center gap-3 p-4 md:p-6 lg:p-16'>
            {jobList &&
              jobList.map((job, index) => (
                <ResumeList jobInfo={job} key={index} />
              ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
