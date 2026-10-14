import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'blue'}} className='d-flex align-items-center justify-content-center text-light'>
      <div className='text-center'>
          <h1>Contact Us</h1>
          <h5><MdEmail /> resumebuilder@gmail.com</h5>
          <h5><FaPhone/> 87435689535</h5>
          <h5>Connect With Us</h5>
          <label>Designed and build with React</label>
      </div>
      
    </div>
  )
}

export default Footer
