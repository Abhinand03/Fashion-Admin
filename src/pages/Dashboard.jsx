import React from 'react'
import Header from '../components/Header'
import './pro.css'

function Dashboard() {

  return (
    <>
    <Header/>
    <div>
      <div className='d-flex'>
       <h4 className='d-h4'>30 Orders</h4>
       <h4 className='d-h41'>20 Customers</h4>
      </div>
      <img src="https://www.edrawsoft.com/images/chartstypes/monthly-sales.png" className='mt-5 ms-5' alt="" />
    </div>

    

    
    </>
  )
}

export default Dashboard