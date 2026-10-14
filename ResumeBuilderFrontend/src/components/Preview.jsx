import React ,{useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa"; 
import { LuHistory } from "react-icons/lu";
import { FaBackward } from "react-icons/fa6"
import Edit from './Edit';
function Preview({resumeData}) {
  console.log(resumeData);
  
  return (
    <div>
      
      <Box component="section" >
      <Paper elevation={3} sx={{ p: 2, textAlign:'center'}}>
        <h1>{resumeData?.fullName}</h1>
        <h5>{resumeData?.job}</h5>

        <p><span>{resumeData?.location}</span>||<span>{resumeData?.email}</span>||<span>{resumeData?.phone}</span></p>

        <p><Link>{resumeData?.github}</Link>|<Link>{resumeData?.linkedin}</Link>|<Link>{resumeData?.portfolio}</Link></p>

        <Divider sx={{fontSize:'23px',fontWeight:'bold',marginBottom:'10px'}}>SUMMARY</Divider>
        <p>{resumeData?.summary}</p>

        <Divider sx={{fontSize:'23px',fontWeight:'bold'}}>SKILLS</Divider>
        <Stack direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
          {resumeData?.skills?.map(skill=>(<button style={{background:'none'}} key={skill} variant="contained">{skill}</button>))}
        
        </Stack>

        <Divider sx={{fontSize:'23px',fontWeight:'bold',marginBottom:'10px'}}>EDUCATION</Divider>
        <h6>{resumeData?.degree}</h6>
        <p><span>{resumeData?.college}</span>|<span>{resumeData?.university}</span></p>
                
      </Paper>
    </Box>

    </div>
  )
}

export default Preview
