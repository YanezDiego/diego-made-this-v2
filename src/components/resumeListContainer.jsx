/* eslint-disable react/prop-types */


const ResumeList = (props) => {
  const {
    employer,
    isCurrent,
    startDate,
    endDate,
    position,
    companyDescription,
    achievements,
  } = props.jobInfo;

  let workStart = new Date(startDate).getFullYear();
  let workEnd = new Date(endDate).getFullYear();
debugger
  return (
    <div
      tabIndex='0'
      className='bg-white rounded-lg shadow-sm p-4 hover:shadow-lg md:transform md:hover:-translate-y-1 md:hover:scale-105 md:transition md:duration-300'
    >
      <h3 className='bold text-lg md:text-xl lg:text-2xl'>{employer}</h3>
      <div className='font-light pt-1'>
        <p className='pt-1 text-stone-400 text-base '>
          <span className='italic'>{position.trim()}</span>
        </p>
        <p className='py-1 text-base text-stone-400'>
          <span className='italic'>
            {isCurrent ? "Current" : `From ${workStart} to ${workEnd}`}
          </span>
        </p>
        <p className='text-base'>{companyDescription}</p>

      </div>
    </div>
  );
};


ResumeList.defaultProps = {
  employer: '',
  isCurrent: false,
  startDate: '',
  endDate: '',
  position: '',
  companyDescription: '',
};  

export default ResumeList;
