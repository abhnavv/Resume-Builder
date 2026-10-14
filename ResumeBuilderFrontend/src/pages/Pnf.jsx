import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'60vh',marginTop:'90px'}} className='text-center'>
     <img src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" alt="" height={'300px'} width={'300px'}/>
     <h5 className='text-danger'>Sorry We couldn't Find The Page</h5>
    <Link to={'/'} className='btn btn-dark'>Back To Home</Link>
    </div>
  )
}

export default Pnf
