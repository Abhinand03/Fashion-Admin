import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { allproduct, delteProduct } from '../services/Allapi';
import base_url from '../services/Server_url';
import { toast } from 'react-toastify';

function Product() {

  const [product,setproduct]=useState([])
  const [delst,setdelst]=useState('')

  useEffect(()=>{
    handelproduct()

  },[delst])

  const handledelte=async(id)=>{

    const result= await delteProduct(id)

    if(result.status==200){
      toast.success("Product Delete Success fully")
      setdelst(result)
    }
    else{
      toast.error(result.responce)
    }
   

  }

  const handelproduct=async()=>{

    const result= await allproduct()
    if(result.status==200)
      {
        setproduct(result.data)
      }
      else{
        console.log(result.responce);
      }
   

  }
  console.log(product);
  return (
    <>
    <Header/>

    
    <div className='d-flex justify-content-center  flex-wrap g-0'>
      {
        
        product.map(item=>(
          <Card style={{ width: '18rem' }} className='mt-5 mx-2 m-card' >
          <Card.Img variant="top" className='car-img' style={{ height: '14rem' }}  src={`${base_url}/uploads/${item.image}`} />
          <Card.Body>
            <Card.Title>{item.brand}</Card.Title>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
            <Card.Text>
            ₹{item.price}
            </Card.Text>
            <div className='d-flex justify-content-evenly'>
            <Button  variant="primary"><i className="fa-solid fa-pen-to-square mx-2"></i>Edit</Button>
            <Button variant="danger" onClick={()=>{handledelte(item._id)}}><i className="fa-solid fa-trash mx-2" ></i>Delete</Button>
    
            </div>
           
          </Card.Body>
        </Card>

        ))
            }
   
    </div>

    </>
  )
}

export default Product