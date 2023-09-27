/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
//import { useState } from "react";

const JobInfoModal = (props) => {
    const {
      employer,
    //   isCurrent,
    //   startDate,
    //   endDate,
      position,
      achievements,
      companyDescription,
    } = props.job;

    //   let workStart = new Date(startDate).getFullYear();
    //   let workEnd = new Date(endDate).getFullYear();

    
  

    return (
      <>
        <Modal dismissible show={props.openModal} onClick={props.closeModal}>
          <Modal.Header>{employer}</Modal.Header>
          <Modal.Body>
            <div className='space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                <span className='italic'>{position.trim()}</span>
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                {companyDescription}
              </p>
              <ol className='list-disc list-inside'>
                {achievements.map((achievement, index) => (
                  <li className='text-base' key={index}>
                    {achievement}
                  </li>
                ))}
              </ol>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={props.closeModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    ); //closing return
};

export default JobInfoModal;
