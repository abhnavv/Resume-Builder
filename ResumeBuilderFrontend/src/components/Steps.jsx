import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import JobTypes from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import jobSummary from '../assets/summaries.json'
import { addResumeAPI } from '../services/allAPI'
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Information', 'Contact Details', 'Education Details','Review & Submit'];


function Steps({resumeData,setResumeData}) {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const navigate=useNavigate()
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const generateAI=()=>{
      setResumeData({
        ...resumeData,
        skills:jobSkills[resumeData.job],
        summary:jobSummary[resumeData.job]
      })
      handleNext()
  }
  
  const addResume=async()=>{
    const {fullName,job,location,email,phone,linkedin,github,degree,college,university,passoutYear,skills,summary}=resumeData
    if(fullName&&job&&location&&email&&phone&&linkedin&&github&&degree&&college&&university&&passoutYear&&skills.length>0&&summary){
        const response=await addResumeAPI(resumeData)
        console.log(response);
        if(response.status==201){
          alert("Resume Created")
          const resumeId=response.data.id
          // console.log(resumeId)
          navigate(`/resume/${resumeId}/view` )
        }
        
      }
      else{
        alert("fill the fields completely")
      }
    }

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef=React.useRef<HTMLButtonElement>(null);
  const nextButtonRef = React.useRef(null);

const renderStepArrayContent=(stepCount)=>{
  switch(stepCount){
    case 0:return (
        
      <div>
        <h3>Personal Details</h3>
        <div className='d-flex flex-column'> 
          <TextField value={resumeData.fullName} onChange={(e)=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
          <FormControl variant="standard" className='w-100'>
        <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
        <Select onChange={(e)=>setResumeData({...resumeData,job:e.target.value
        })}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          {JobTypes.jobRoles.map(jobs=>(
            <MenuItem key={jobs} value={jobs}>{jobs}</MenuItem>
          ))}
          
          
        </Select>
      </FormControl>
          <TextField value={resumeData.location} onChange={(e)=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
        </div>
      </div>
     
    )
    case 1:return (
      <div>
        <h3>Contact Details</h3>
        <div className='d-flex flex-column'>
        <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})}  id="standard-basic" label="Email" variant="standard" />
        <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})}  id="standard-basic" label="Phone" variant="standard" />
        <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})}  id="standard-basic" label="Github Link" variant="standard" />
        <TextField value={resumeData.linkedin} onChange={(e)=>setResumeData({...resumeData,linkedin:e.target.value})}  id="standard-basic" label="Linkedin Link" variant="standard" />
        <TextField value={resumeData.portfolio} onChange={(e)=>setResumeData({...resumeData,portfolio:e.target.value})}  id="standard-basic" label="Portfolio Link" variant="standard" />
        </div>
      </div>
    )
    case 2:return (
      <div>
        <h3>Education Details</h3>
        <div className='d-flex flex-column'>
        <TextField value={resumeData.degree} onChange={(e)=>setResumeData({...resumeData,degree:e.target.value})}  id="standard-basic" label="Course" variant="standard" />
        <TextField value={resumeData.college} onChange={(e)=>setResumeData({...resumeData,college:e.target.value})}  id="standard-basic" label="College" variant="standard" />
        <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})}  id="standard-basic" label="University" variant="standard" />
        <TextField value={resumeData.passoutYear} onChange={(e)=>setResumeData({...resumeData,passoutYear:e.target.value})}  id="standard-basic" label="Passout Year" variant="standard" />
        </div>
      </div>
    )
    
    case 3:return (
      <div>
          <h3>Skills</h3>
          <p>Our AI will generate skills and summary according to your job role.Click the <b>SKILL & SUMMARY</b> button to proceed</p>
        </div>

    )
    
  }
}

  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={addResume} ref={resetButtonRef}>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each step */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
                           
            {
              activeStep==steps.length-1?
              <Button  onClick={generateAI}>Generate Skill & Summary</Button>
              :
              <Button onClick={handleNext}>Next</Button>
            }  
            
          </Box>
        </React.Fragment>
      )}
    </Box>
   </div>
  )
}


export default Steps
