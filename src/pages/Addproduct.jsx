import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { addproduct } from '../services/Allapi'
import Header from '../components/Header'
import './pro.css'

function Addproduct() {
    const [reststus, setrestatus] = useState('')
    const [chstatus, chsetstatus] = useState(false)
    const [data, setdata] = useState({
        brand: '', title: '', description: "", category: "", price: "", image: "", meterial:"",color:"",mrp:0
    })
    const [preview, setpreview] = useState([

    ])
    const [status, setstatus] = useState(false)
    useEffect(() => {
        if (data.image.type == "image/jpg" || data.image.type == "image/jpeg" || data.image.type == "image/png") {
            setstatus(false)
            setpreview(URL.createObjectURL(data.image))
        }
        else {
            setpreview('')
            setstatus(true)

        }

    }, [data, chsetstatus])

    const handleupload = async () => {
        console.log(data);
        const { brand, title, description, category, price, image,meterial,mrp,color } = data
        if (!brand || !title || !description || !category || !price || !image||!meterial||!mrp||!color) {
            toast.warning("fill all the feilds")
        }
        else {

            const formData = new FormData()
            formData.append("brand", brand)
            formData.append("title", title)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("price", price)
            formData.append("meterial",meterial)
            formData.append("mrp",mrp)
            formData.append("color",color)
            formData.append("image", image)
            // formData.append("Eximage", image.name)
            
            const reqHeader = {
                "Content-Type": "multipart/form-data"



            }
            console.log(formData);
            const result = await addproduct(formData, reqHeader)
            if (result.status == 200) {
                toast.success("Product Added Successfully")
                setdata({
                    brand: "", title: "", description: "", price: "", category: "", image: "",meterial:"",mrp:"",color:""
                })
                setrestatus(result)
                chsetstatus(!chsetstatus)



            }
            else {
                toast.error(result.response.data)
            }
        }


    }
    console.log(data);

    return (
        <>
            <Header />

            <h1 className='text-center mt-3 text-warning'>Add Product</h1>

            <div className='d-flex justify-content-center align-items-center w-100 mt-5 '  >
                <div className='border shadow p-4 w-50' style={{background:"gainsboro"}}>
                    <Form>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                                <Form.Label>Brand Name</Form.Label>
                                <Form.Control type="text" value={data.brand} onChange={(e) => { setdata({ ...data, brand: e.target.value }) }} placeholder="Enter the Brand Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 ms-5 w-100" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title Name</Form.Label>
                                <Form.Control type="text" value={data.title} onChange={(e) => { setdata({ ...data, title: e.target.value }) }} placeholder="Enter the Product Title" />
                            </Form.Group>

                        </div>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={data.description} onChange={(e) => { setdata({ ...data, description: e.target.value }) }} rows={3} />
                        </Form.Group>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
                                <Form.Label>Sale Price</Form.Label>
                                <Form.Control type="number" value={data.price} onChange={(e) => { setdata({ ...data, price: e.target.value }) }} placeholder="Enter the Price of product" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-100 ms-5" controlId="exampleForm.ControlInput1">
                                <Form.Label>MRP</Form.Label>
                                <Form.Control type="number" value={data.mrp} onChange={(e) => { setdata({ ...data, mrp: e.target.value }) }} placeholder="Enter the Price of product" />
                            </Form.Group>

                        </div>

                        <div className='d-flex'>

                            <Form.Group className="mb-3  w-100" controlId="exampleForm.ControlInput1">
                                <Form.Label>Material </Form.Label>
                                <Form.Control type="text" value={data.meterial} onChange={(e) => { setdata({ ...data, meterial: e.target.value }) }} placeholder="Enter the Product Title" />
                            </Form.Group>
                            <Form.Group className="mb-3 ms-5 w-100" controlId="exampleForm.ControlInput1">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text" value={data.color} onChange={(e) => { setdata({ ...data, color: e.target.value }) }} placeholder="Enter the Product Title" />
                            </Form.Group>




                        </div>
                        <Form.Label>Category</Form.Label>

                        <Form.Select id='sel' aria-label="Default select example" value={data.category} onChange={(e) => { setdata({ ...data, category: e.target.value }) }}>

                            <option>--please select category--</option>
                            <option value="men">men</option>
                            <option value="women">women</option>
                            <option value="kid">kid</option>
                        </Form.Select>


                        <p className='mt-2'>Image</p>
                        <label>
                            <input type="file" name="" onChange={(e) => { setdata({ ...data, image: e.target.files[0] }) }} style={{ display: 'none' }} />
                            <img className='img-fluid' style={{ width: "12rem" }} src={preview ? preview : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"} alt="" />
                        </label>
                    </Form>
                    <button type='reset' onClick={handleupload} className='btnad btn btn-success mt-4'>Upload</button>

                </div>
            </div>
           
        </>

    )
}

export default Addproduct