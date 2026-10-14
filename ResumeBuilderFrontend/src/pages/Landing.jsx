import React from 'react'
import ResumeCreation from './ResumeCreation'
import { Link } from 'react-router-dom'
import heroImage from '../assets/tungart7-business-8941853.jpg'
import section2Image from '../assets/section2image.jpg'
import section3Image from '../assets/section3grp.jpg'

import profile1 from '../assets/prf1.jpeg'
import profile2 from '../assets/pf2.jpeg'
import profile3 from '../assets/pf3.jpeg'
import profile4 from '../assets/pf4.jpeg'
function Landing() {
  return (
    <div>
      <section style={{height:'550px',backgroundImage:`url(${heroImage})`,backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
      <div className='row pt-5'>
        <div className='col-12 col-md-4'>
        </div>
        <div className='col-12 col-md-4'>
          <div className='text-center border box-shadow rounded p-5 mt-5' style={{backgroundColor:'rgb(255,255,255,0.6'}}>
            <h1 style={{fontFamily:'"Molle", cursive'}}>Designed to get hired</h1>
            <h2 style={{fontFamily:'"Akaya Kanadaka", system-ui'}}>Your skils,your story,your next job -- all in one</h2>
            <Link to={'/resume'}><button className='btn btn-danger' style={{fontFamily:'"Akaya Kanadaka", system-ui'}}>Create Resume</button></Link>
          </div>
          
        </div>
      </div>
      </section>
      <section className='container mt-5'>
        <h1 style={{fontFamily:'"Molle", cursive',textAlign:'center'}}>Tools</h1>
        <div className='row m-4'>
            <div className='col-lg-6 col-md-12 p-3'>
                  <h2>Resume</h2>
                  <label>Create unlimited new resumes and easily edit them afterwards.</label>
                  <h2 className='mt-4'>Cover Letters</h2>
                  <label>Easily write professional cover letters.</label>
                  <h2 className='mt-4'>Jobs</h2>
                  <label htmlFor="">Automatucally recieve new and relevent job postings.</label>
                  <h2 className='mt-4'>Applications</h2>
                  <label htmlFor="">Effortlessly manage and track your job applications in an oragnized manner</label>
            </div>
            <div className='col-lg-6 col-md-12' style={{textAlign:'center'}}> 
             
                <img src={section2Image} alt="" height={400} />
            </div>
        </div>
      </section>
      <section style={{height:'450px',backgroundImage:`url(${section3Image})`,backgroundSize:'cover',backgroundPosition:'top center',backgroundAttachment:'fixed'}}>
        
      </section>
      <section className='container mt-5'>
        <h1 style={{fontFamily:'"Molle", cursive',textAlign:'center'}}>Testimony</h1>
        <div className='row m-5'>
          <div className='col-lg-6 fs-5' style={{textAlign:'justify'}}>
              <h2>Trusted by professionals worldwide</h2>
              <p>At LiveCareer, we don't just help yoou create resumes - we help you land the job.Whether You're a seasoned professional or just starting out,our tools are designed to get results.</p>
              <p className='mt-3'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster</p>
              <p className='mt-3'>join thousands of job seekers who've fast-tracked their careers with a resume that truly stands out.</p>
          </div>
          <div className='col-lg-6'>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}} className='ms-5'>
              <img src={profile1} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>    
              <img src={profile2} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile3} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile4} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>
              <img src={profile1} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded' />    
              <img src={profile2} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile3} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile4} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>
              <img src={profile1} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded' />    
              <img src={profile2} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile3} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>  
              <img src={profile4} alt="" style={{width:'100%',height:'140px',objectFit:'cover'}} className='rounded'/>              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
