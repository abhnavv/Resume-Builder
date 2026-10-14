import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import ResumeCreation from './pages/ResumeCreation'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import ViewResume from './pages/ViewResume'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
        <Route  path='/' element={<Landing/>}/>
        <Route  path='/resume' element={<ResumeCreation/>}/>
        <Route  path='/userform' element={<UserForm/>}/>
        <Route  path='/history' element={<History/>}/>
        <Route path='/resume/:id/view' element={<ViewResume/>}/>
        <Route  path='/*' element={<Pnf/>}/>
        
    </Routes>



    <Footer/>
    </>
  )
}

export default App
