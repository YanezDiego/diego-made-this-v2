const ResumeList = (props) => {
  const {
    employer,
    isCurrent,
    startDate,
    endDate,
    position,
    companyDescription,
  } = props.jobInfo;

  let workStart = new Date(startDate).getFullYear();
  let workEnd = new Date(endDate).getFullYear();

  return (
    <div tabIndex='0'
     className='bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-lg md:transform md:hover:-translate-y-1 md:hover:scale-105 md:transition md:duration-300'>

        <h3>{employer}</h3>
        <article>{companyDescription}</article>
        <p>{position}</p>
        <p>{isCurrent ? "Current" : `From ${workStart} to ${workEnd}`}</p>

    </div>
  );
};

export default ResumeList;
