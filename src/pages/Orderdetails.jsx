import React, { useState } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import './pro.css'
import base_url from '../services/Server_url'
import { delstatus } from '../services/Allapi'
import Swal from 'sweetalert2'
import Invoice from '../components/Invoice'





function Orderdetails() {
    const location = useLocation()

    const product = location.state

    const [deli,setdeli]=useState({
        dstatus:"Delivered",_id:product._id
    })
   const deliup=async()=>{
    // setdeli({...deli,dstatus:"Delivered"})
    const result = await delstatus(deli)
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Delivery Status Updated",
        showConfirmButton: false,
        timer: 2500
      });
   }
   console.log(deli);
    console.log(product);
    return (
        <>
            <Header />
            <div>
                <h2 className=' text-center bg-secondary text-white p-3 '>Order Details</h2>
                <div>
                    <div className='d-flex justify-content-evenly'>
                        <div className='ms-5 mt-5 shadow pt-4 pe-4 ps-4 rounded'>
                            <h5 className='bg-primary text-white p-2 rounded'><i className="fa-regular fa-user me-2" ></i>Custmer Details</h5>
                            <div className='ms-2 mt-4'>
                                <h6 className='or-p1 mb-3'>{product?.username}</h6>
                                <p className='or-det-p '><i className="fa-solid fa-envelope me-3"></i>{product?.email}</p>
                                <p className='or-det-p or-p2'> <i class="fa-solid fa-phone me-3"></i>{product?.phone}</p>

                            </div>
                        </div>
                        <div className='ms-5 mt-5 shadow pt-4 pe-4 ps-4 rounded'>
                            <h5 className='bg-success text-white p-2 rounded'> <i class="fa-solid fa-location-dot me-2"></i>Delivery Address</h5>
                            <div className='ms-2 mt-4'>
                                <p className='or-p1'><i class="fa-solid fa-house me-3"></i>{product?.adress}</p>
                                <p className='or-det-p'>{product?.locality},<span>{product?.dist}</span></p>
                                <p className='or-det-p or-p2'>{product?.state},<span>{product.pincode}</span></p>

                            </div>
                        </div>
                        <div className='ms-5 mt-5 shadow pt-4 pe-4 ps-4 rounded'>
                            <h5 className='bg-primary text-white p-2 rounded'><i class="fa-solid fa-truck"></i> Delivery Details</h5>
                            <div className='ms-2 mt-4'>
                                <h6 className='or-p1 mb-3'><i class="fa-regular fa-calendar-days me-3"></i> Date OF delivery: <span className='text-danger'>{product?.deliverydate}</span> </h6>
                                <p className='or-det-p'>Payment Mode: <span className='ms-2'>{product?.paymentmode}</span></p>
                                <p className='or-det-p or-p2'>Price: <span className='ms-3'>₹{product?.price}</span></p>

                            </div>
                        </div>

                    </div>

                </div>

                <div className='row mt-5 g-0'>
                    <div className="col-md-7 mt-4 ms-5 ">
                        <table className='table'>
                            <thead  className=''>
                                <tr className='table-primary'>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>

                            </thead>
                            <br />

                            <tbody>
                                <tr class="table-active">
                                    <td><img style={{ height: '5rem' }} src={`${base_url}/uploads/${product.image}`} alt="" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.color}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.paymentmode=="COD"?product.price:product.paymentmode}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className='mt-5'>
                            <button className='button' onClick={deliup}>Mark As Delivered</button>
                        <Invoice prop={product}/>

                        </div>
                        <div className='mt-'>

                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Orderdetails