import React, { useEffect, useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { FaFileDownload } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit';
import Preview from '../components/Preview';
import { useParams } from 'react-router-dom';
import { getSingleResumeAPI,downloadResumeAPI } from '../services/allAPI';
import html2canvas from 'html2canvas';
import  jspdf from 'jspdf'
function ViewResume() {
    const [resumeData,setResumeData]=useState({})
    console.log(resumeData);
    const previewRef=useRef() //{current}
    const {id}=useParams()
    // console.log(id);
    useEffect(()=>{
        getSingleResume()
    },[])

    const downloadResume=async()=>{
        const previewTag=previewRef.current
        const canvas=await html2canvas(previewTag)
        // const imgUrl=canvas.toDataURL('image/png')
        //convetrt image url to short url
        canvas.toBlob(async(blob)=>{
            const formdata=new FormData()
            formdata.append("file",blob)
            formdata.append("upload_preset","my_preset")
            const res = await fetch("https://api.cloudinary.com/v1_1/clnrxoum/image/upload",{
                method:'POST',
                body:formdata
            })
            console.log(res);
            const data=await res.json()
            console.log(data);
            const url=data.secure_url
            console.log(url);
            generatePdf(url)
            
        })
        
    }

    const generatePdf=async(resumeImage)=>{
        const date=new Date()
        console.log(date);
        const timestamp=`${date.toLocaleDateString()},${date.toLocaleTimeString()}`
        console.log(timestamp);
        const pdf=new jspdf()
        const imgWidth=pdf.internal.pageSize.getWidth()
        const imgHeight=pdf.internal.pageSize.getHeight()
        pdf.addImage(resumeImage,"PNG",0,0,imgWidth,imgHeight)
        const downloadDetails={
            timestamp,resumeId:id,resumeImage,jobRole:resumeData.job
        }
        const response=await downloadResumeAPI(downloadDetails)
        console.log(response);
        if(response.status==201){
            pdf.save(`${resumeData.fullName} Resume.pdf`)
        }
        
    }

    const getSingleResume=async()=>{
        if(id){
           const resume=await getSingleResumeAPI(id) 
           console.log(resume);
           setResumeData(resume.data)
          
        }
    }
    
  return (
    <div className='container' style={{marginTop:'90px'}}>
        <div className='row my-5'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8'>
                <Stack direction={'row'} sx={{justifyContent:'center',alignItems:'center'}}>
                    {/* download*/}
                    <button onClick={downloadResume} className='btn fs-2 text-danger'><FaFileDownload /></button>
                    {/*edit*/}
                    <Edit resumeData={resumeData} setResumeData={setResumeData}/>
                    {/* history*/}
                    <Link to={'/history'} className='text-success fs-1 ms-3'><LuHistory />
                    </Link>
                    {/* back*/}
                    <button className='btn fs-1 text-primary ms-3'><FaBackward   /></button>
                </Stack>
                <div ref={previewRef}>
                    <Preview resumeData={resumeData} />
                </div>
            </div>
            <div className='col-lg-2'></div>
        </div>
        
    </div>
  )
}

export default ViewResume
