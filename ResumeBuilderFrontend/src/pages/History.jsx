import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {
  const [downloads,setDownloads]=useState([])
  useEffect(()=>{
    getDownloads()
  },[])
  const getDownloads=async()=>{
    const response=await getHistoryAPI()
    console.log(response)
    if(response.data){
      setDownloads(response.data)
    }
  }
  const deleteHistory=async(id)=>{
    const response=await deleteHistoryAPI(id)
    getDownloads()
    console.log(response);
    
  }
  return (
    <div style={{marginTop:'90px'}}>
      <h1 className='text-center'>Downloaded Resumes</h1>
      <Link to={'/'} style={{marginRight:'20px',marginTop:'-40px'}}   className='float-end '>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          {
            downloads?.length>0 ?
            downloads.map(download=>(
              <div className='col-12 col-sm-4 col-md-6'> 
            <Paper elevation={3} sx={{my:3,p:3,textAlign:'center'}}>
              <div className='d-flex flex-wrap align-items-center justify-content-between'>
                <h5>Review At :{download.timestamp}</h5> 
                <button className='btn text-danger' onClick={()=>deleteHistory(download.id)}><MdDelete className='fs-2'/></button>
              </div>
              <div>
                <Link to={`/resume/${download.resumeId}/view`}>
                <img src={download.resumeImage} className='img-fluid' alt="" />
                </Link>
              </div> 
            </Paper>
          </div>
            ))
            
          :
          <p className='text-danger'>No Resume Downloaded Yet..</p>}

        </div>  
      </Box>
    </div>
  )
}

export default History
