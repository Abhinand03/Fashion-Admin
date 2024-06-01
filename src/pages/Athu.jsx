import React, { useState } from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Athu() {
  const navigate=useNavigate()
  
  const [data,setdata]=useState({
    user:"",password:""
  })
  const admin="admin"
  const pass="admin@123"
   const handlelogin=()=>{
    const {user,password}=data
    console.log(data);

    if(user==admin && password==pass){
      navigate('/dash')

    }
    else{
      toast.error("Invalid username / Password")

    }
    
   }
  return (
    <>
      <div className='admain '>
        <div className='d-flex justify-content-center align-items-center w-100 ' style={{ height: "100vh" }}>
          <div className=' shadow p-5  log-car'>
            <h1 className='text-center text-white'>ADMIN PANEL</h1>
            <p className='text-center text-white'>Control Panel Login</p>
            <div className='mt-3'>

              <input type="text" className=' inp p-3' onChange={(e)=>{setdata({...data,user:e.target.value})}} placeholder='Enter email' />
              <br />
              <input type="password" className=' inp p-3' onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder='Enter Password' />
              <div className='d-grid'>
                <button className=' btn-lo btn-block mt-3' onClick={handlelogin}>LOGIN</button>
              </div>
            </div>


          </div>
        </div>

      </div>



    </>
  )
}

export default Athu