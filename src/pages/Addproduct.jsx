import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { addproduct } from '../services/Allapi'
import Header from '../components/Header'

function Addproduct() {
    const [reststus,setrestatus]=useState('')
    const [chstatus,chsetstatus]=useState(false)
    const [data, setdata] = useState({
        brand: '', title: '', description: "", category: "", price: "", image: ""
    })
    const [preview, setpreview] = useState([
    
    ])
    const [status, setstatus] = useState(false)
    useEffect(()=>{
        if(data.image.type=="image/jpg"||data.image.type=="image/jpeg"||data.image.type=="image/png")
            {
                setstatus(false)
                setpreview(URL.createObjectURL(data.image))
            }
            else{
                setpreview('')
                setstatus(true)

            }

    },[data,chsetstatus])

    const handleupload = async () => {
        console.log(data);
        const {brand,title,description,category,price,image}=data
        if(!brand||!title||!description||!category||!price||!image){
            toast.warning("fill all the feilds")
        }
        else{
             
            const formData= new FormData()
            formData.append("brand",brand)
            formData.append("title",title)
            formData.append("description",description)
            formData.append("category",category)
            formData.append("price",price)
            formData.append("image",image)
            const reqHeader = {
                "Content-Type": "multipart/form-data"
                


            }
            const result= await addproduct(formData,reqHeader)
            if(result.status==200){
                toast.success("Product Added Successfully")
                setdata({
                    brand:"",title:"",description:"",price:"",category:"",image:""
                })
                setrestatus(result)
                chsetstatus(!chsetstatus)
               
                

            }
            else{
                toast.error(result.response.data)
            }
        }


    }
    console.log(data);

    return (
        <>
    <Header/>

            <h1 className='text-center mt-3 text-warning'>Add Product</h1>

            <div className='d-flex justify-content-center align-items-center w-100 mt-5 ' >
                <div className='border shadow p-5 w-50'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => { setdata({ ...data, brand: e.target.value }) }} placeholder="Enter the Brand Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => { setdata({ ...data, title: e.target.value }) }} placeholder="Enter the Product Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => { setdata({ ...data, description: e.target.value }) }} rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" onChange={(e) => { setdata({ ...data, price: e.target.value }) }} placeholder="Enter the Price of product" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" onChange={(e) => { setdata({ ...data, category: e.target.value }) }} placeholder="Enter the category Name" />
                        </Form.Group>
                        <p className='mt-2'>Image</p>
                        <label>
                            <input type="file" name="" onChange={(e) => { setdata({ ...data, image: e.target.files[0] }) }} style={{ display: 'none' }} />
                            <img className='img-fluid' style={{ width: "12rem" }} src={preview?preview:"https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"} alt="" />
                        </label>
                    </Form>
                    <button type='reset' onClick={handleupload} className='btn btn-success'>Upload</button>

                </div>
            </div>
        </>

    )
}

export default Addproduct