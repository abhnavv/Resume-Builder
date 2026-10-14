import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeCreation() {
  return (
    <div className='container mt-5 text-center' style={{paddingTop:'80px'}}>
     <h1 className='mb-5'>Create a job-winning Resume in minutes</h1>
     <div className='row g-5'>
        <div className='col-12 col-lg-6 '>
          <div className='border shadow text-center p-5 h-100 rounded'>
            <FaFileAlt color='blue' size={40} /> 
            <h2 className='mt-3'>Add your Information</h2>
            <p>Add pre-written examples to each section </p>
            <h3>Step 1</h3>
          </div>
        </div>
        <div className='col-12 col-lg-6 '>
          <div className='p-5 border shadow text-center h-100 rounded'>
            <IoIosDownload color='red' size={40} />
            <h2 className='mt-3'>Download your Resume</h2>
            <p>Download and start applying</p>
            <h3>Step 2</h3>
          </div>
        </div>
     </div>
     {/* <button onClick={()=>window.location.href="./userform"} className='m-5 btn btn-danger fs-5'>LET'S START</button> */}
     <Link to={'/userform'} className='btn btn-danger m-5 fs-5'>LET'S START</Link>
    </div>
  )
}

export default ResumeCreation
