import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { allproduct, delteProduct } from '../services/Allapi';
import base_url from '../services/Server_url';
import { toast } from 'react-toastify';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './pro.css'

function Product() {

  const [product, setproduct] = useState([])
  const [delst, setdelst] = useState('')
  const [search,setserach]=useState("")

  useEffect(() => {
    handelproduct()

  }, [delst])

  const handledelte = async (id) => {

    const result = await delteProduct(id)

    if (result.status == 200) {
      toast.success("Product Delete Success fully")
      setdelst(result)
    }
    else {
      toast.error(result.responce)
    }


  }

  const handelproduct = async () => {

    const result = await allproduct(search)
    if (result.status == 200) {
      setproduct(result.data)
    }
    else {
      console.log(result.responce);
    }


  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(product);
  return (
    <>
      <Header />


      <div className='d-flex justify-content-center  flex-wrap g-0'>
        {

          product.map(item => (
            <div>

              <Card style={{ width: '18rem' }} className='mt-5 mx-2 m-card' >
                <Card.Img variant="top" className='car-img' style={{ height: '14rem' }} src={`${base_url}/uploads/${item.image}`} />
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
                    <Button variant="primary" onClick={handleShow}><i className="fa-solid fa-pen-to-square mx-2"></i>Edit</Button>
                    <Button variant="danger" onClick={() => { handledelte(item._id) }}><i className="fa-solid fa-trash mx-2" ></i>Delete</Button>

                  </div>

                </Card.Body>
              </Card>


             

              
            </div>


          ))
        }

      </div>

    </>
  )
}

export default Product