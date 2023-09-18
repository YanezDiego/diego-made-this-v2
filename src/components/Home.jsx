import { useEffect, useState } from "react";
//import { client } from "../../client";
import ResumeList from "./ResumeListContainer";
import resume from "../../data/resume.json";
const Home = () => {
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    // client
    //   .fetch(
    //     `*[_type == "resume"]{
    //      _id,
    //     employer,
    //     isCurrent,
    //     startDate,
    //     endDate,
    //    position,
    //   companyDescription,
    //   "slug": slug.current,
    //   "achievements":achievements[].children[].text
    //   } | order(startDate desc)`
    //   )
    //   .then((data) => setJobList(data))
    //   .catch(console.error);

    setJobList(resume);
    if(jobList){
      localStorage.setItem("jobs", JSON.stringify(jobList));
    }

  }, [jobList]);

  return (
    <>
      <div className='flex items-start justify-center  min-h-full md:min-h-[66vh] md:items-center p-4 md:p-6 lg:p-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <div className='title p-4'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl'>
                Hello! <br /> My name is Diego
              </h1>
            </div>
            <div className='intro font-light text-grey-00 text-lg md:text-xl lg:text-2xl'>
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

      <div className='flex-wrap mx-auto text-xl md:text-6xl lg:text-6xl'>
        <h2 className='text-center font-medium'>Past Experiences</h2>

        <div className='flex flex-col basis-1/4 p-4 md:flex-row lg:flex-row lg:p-8'>
          {jobList &&
            jobList.map((job, index) => (
              <ResumeList jobInfo={job} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
