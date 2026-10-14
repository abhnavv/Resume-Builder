import React, { useRef } from 'react'
import { MdEditDocument } from 'react-icons/md'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import JobTypes from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import jobSummary from '../assets/summaries.json'
import { editResumeAPI } from '../services/allAPI';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight:'80vh',
    overflowY:'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function Edit({resumeData,setResumeData}) {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const valueRef=useRef()
  const removeSkill=(skill)=>{
    setResumeData({...resumeData,skills:resumeData?.skills?.filter(item=>item!=skill)} )
  }
  const addSkill=(skill)=>{
    console.log(skill);
    
    if(skill){
      if(resumeData?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
        alert('Skill has already added ! Please enter another One')
        
      }else{
        setResumeData({...resumeData,skills
          :[...resumeData?.skills,skill]
        })
      }
      valueRef.current.value=""
    }else{
      alert("Enter a valid Skill")
    }
  }
  const editResume=async()=>{
    const {fullName,job,location,email,phone,linkedin,github,degree,college,university,passoutYear,skills,summary}=resumeData
    if(fullName&&job&&location&&email&&phone&&linkedin&&github&&degree&&college&&university&&passoutYear&&skills.length>0&&summary){
        const response=await editResumeAPI(resumeData?.id,resumeData)
        console.log(response);
        if(response.status==200){
          alert('Resume Updated Successfully..')
          handleClose()
        }
      }
      else{
        alert("fill the fields completely")
      }
    
  }
  return (
    <div>
      <button onClick={handleOpen} className='btn fs-1 text-warning'><MdEditDocument /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" sx={{color:'red'}}>
          EDIT DETAILS
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h3>Personal Details</h3>
        <div className='d-flex flex-column'> 
          <TextField value={resumeData.fullName} onChange={(e)=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
          <FormControl variant="standard" className='w-100'>
        <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
        <Select value={resumeData?.job} onChange={(e)=>setResumeData({...resumeData,
        job:e.target.value,
        skills:jobSkills[e.target.value]||[],
        summary:jobSummary[e.target.value]||''})}
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

        <h3 className='mt-4'>Contact Details</h3>
        <div className='d-flex flex-column'>
        <TextField value={resumeData.email} onChange={(e)=>setResumeData({...resumeData,email:e.target.value})}  id="standard-basic" label="Email" variant="standard" />
        <TextField value={resumeData.phone} onChange={(e)=>setResumeData({...resumeData,phone:e.target.value})}  id="standard-basic" label="Phone" variant="standard" />
        <TextField value={resumeData.github} onChange={(e)=>setResumeData({...resumeData,github:e.target.value})}  id="standard-basic" label="Github Link" variant="standard" />
        <TextField value={resumeData.linkedin} onChange={(e)=>setResumeData({...resumeData,linkedin:e.target.value})}  id="standard-basic" label="Linkedin Link" variant="standard" />
        <TextField value={resumeData.portfolio} onChange={(e)=>setResumeData({...resumeData,portfolio:e.target.value})}  id="standard-basic" label="Portfolio Link" variant="standard" />
        </div>
        <h3 className='mt-4'>Education Details</h3>
        <div className='d-flex flex-column'>
        <TextField value={resumeData.degree} onChange={(e)=>setResumeData({...resumeData,degree:e.target.value})}  id="standard-basic" label="Course" variant="standard" />
        <TextField value={resumeData.college} onChange={(e)=>setResumeData({...resumeData,college:e.target.value})}  id="standard-basic" label="College" variant="standard" />
        <TextField value={resumeData.university} onChange={(e)=>setResumeData({...resumeData,university:e.target.value})}  id="standard-basic" label="University" variant="standard" />
        <TextField value={resumeData.passoutYear} onChange={(e)=>setResumeData({...resumeData,passoutYear:e.target.value})}  id="standard-basic" label="Passout Year" variant="standard" />
        </div>
        
        <h3 className='mt-3'>Skills</h3>
            <div className='d-flex gap-5'>
              <input type='text' placeholder='Add skills' className='form-control' ref={valueRef} sx={{width:'500px'}} id="outlined-basic"  label="Add Skills"/>
              <Button variant="contained" className='ms-3' onClick={()=>addSkill(valueRef.current.value)}>Add</Button>
            </div>

            
            <div>
              <h5 className='mt-3'>Added Skills :</h5>
              <div className='d-flex my-3 flex-wrap '>
                
                    {
                      resumeData?.skills?.map(skill=>(
                        <span key={skill} className='d-flex btn btn-danger m-1 align-items-center text-center justify-content-center'>{skill}<Button className='btn text-light' onClick={()=>removeSkill(skill)}>x</Button></span>
                      ))
                    }
                
              </div>

            </div>
            <h3>Professional Summary</h3>
        <div className='d-flex flex-column'>
          <TextField value={resumeData?.summary} id="standard-basic" label="Write a short summary of yourself" variant="standard" multiline rows={4} onChange={e=>setResumeData({...resumeData,summary:e.target.value})} />
        </div>
          </Typography>
          <Button onClick={editResume}>UPDATE</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
