import React from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'
import { useState } from 'react'

function UserForm() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    job: "",
    location: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
    degree: "",
    college: "",
    university: "",
    passoutYear: "",
    skills: [],
    summary: ""
  })
  return (
    <div style={{ marginTop: '80px' }} className='container-fluid'>
      <h1 className='text-center'> user form</h1>
      <div className='row p-5 '>
        <div className='col-lg-6'>
          <Steps setResumeData={setResumeData} resumeData={resumeData} />
        </div>
        <div className='col-1'></div>
        <div className='col-lg-5'>
          {/*condtion rendering */}
          {resumeData.fullName && <Preview resumeData={resumeData} />}
        </div>
      </div>
    </div>
  )
}

export default UserForm
