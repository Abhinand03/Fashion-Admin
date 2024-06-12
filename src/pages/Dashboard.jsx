import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import './pro.css'
import { Row, Col } from 'react-bootstrap'
import { allproduct, getorder, getuser } from '../services/Allapi'

function Dashboard() {
  const [order, setorder] = useState([])
  const [use, setuse] = useState([])
  const [pro, setpro] = useState([])
  const [search,setserach]=useState("")

  let pa
  let cod
  useEffect(() => {

    handleorder()
    handleuser()
    handleproduct()





  }, [])

  const handleuser = async () => {
    const user = await getuser()
    setuse(user.data)
  }
  const handleorder = async () => {
    const result = await getorder()
    setorder(result.data)

  }


  const handleproduct=async()=>{
    const product = await allproduct(search)
    setpro(product.data)
    console.log(product);
  }




  const ordCount = order.length
  const prd=pro.length
  const useocunt = use.length



  let total = 0
  order.map(item => (
    total = item.price + total
  ))
  console.log(total);


  pa = order.filter(or => (or.paymentmode === "PREPAID"))

  cod = order.filter(co => (co.paymentmode === "COD"))



  let pretotal = 0

  pa.map(item => (
    pretotal = item.price + pretotal
  ))

  let codtotal = 0

  cod.map(cod => (
    codtotal = cod.price + codtotal

  ))
  console.log(pretotal);




  return (
    <>
      <Header />

      <div>
        <h2 style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20210420/pngtree-blue-and-orange-abstract-background-design-for-banner-business-image_632623.jpg")' }} className='p-2 mt-3 ms-3 w-25 rounded text-white'>Welcome Back Admin</h2>


        <div className='d-flex me-5 justify-content-evenly mt-5'>

          <div className='bg-white ps-5 pe-5 pt-4 pb-4 rounded '>

            <h6 className='text-secondary'>Total Sales</h6>
            <h3 className='mt-3 rounded '><span className='text-primary me-3'><i class="fa-solid fa-building-columns fa-xl"></i></span>₹{total}</h3>

          </div>
          <div className='bg-white ps-5 pe-5 pt-4 pb-4 rounded '>

            <h6 className='text-secondary'>PREPAID Sales</h6>
            <h3 className='mt-3 rounded '><span className='text-success me-3'><i class="fa-solid fa-wallet fa-xl"></i></span>₹{pretotal}</h3>

          </div>
          <div className='bg-white ps-5 pe-5 pt-4 pb-4 rounded '>

            <h6 className='text-secondary'>COD Sales</h6>
            <h3 className='mt-3 rounded '><span className='text-warning me-3'><i class="fa-solid fa-money-bill fa-xl"></i></span>₹{codtotal}</h3>

          </div>
        </div>
        <Row className='g-0'>
          <Col>
            <div>
              <div className='ms-5 mt-5 ' >
                <img src="https://media.eagereyes.org/wp-content/uploads/2020/11/dates-line.png" className='img img-fluid' alt="" />

              </div>
              <div>
                {/* <div className='mt-5 ms-5'>
                  <h4>Mange Your Products and Orders</h4>
                </div> */}

              </div>

            </div>
          </Col>
          <Col  >
            <div className=' d-flex mt-5 ms-5 '  >
              <div className='d-flex ms-5 mt-5'>
                <div className='bg-white px-5 py-2 shadow'>
                  <h4 className='  p-3 rounded text-danger'><i class="fa-solid fa-cart-shopping me-4"></i>{ordCount} Orders</h4>

                </div>
                <div className='bg-white px-4 py-2 shadow ms-5'>
                  <h4 className=' p-3 rounded text-success '><i class="fa-solid fa-users me-4"></i>{useocunt} Customers</h4>


                </div>
              </div>

            </div>
            <div className='d-flex w-100 justify-content-center mt-5'>
              <div className='bg-white px-5 py-3 shadow ms-5' >
                <h3 className=' p-3 text-primary'><i class="fa-solid fa-box-open me-4"></i>{prd}Products</h3>
              </div>
            </div>
          </Col>
        </Row>

      </div>




    </>
  )
}

export default Dashboard