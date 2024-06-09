import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DataTable from 'react-data-table-component'
import { getorder, getuser } from '../services/Allapi'
import { Link } from 'react-router-dom'
function Orders() {
    
    const [userdata, setuserdata] = useState([])
    const [status ,setstatus]=useState(false)
    const [change,setchange]=useState("")

    useEffect(() => {
        handleuser()
    }, [])

    const handleuser = async () => {
        const result = await getorder()
        console.log(result);
        if (result.status == 200) {
            setuserdata(result.data)
            setstatus(!status)
            
        }
        else {
            console.log(result.responce);
        }

    }

    console.log(userdata);
    const ch=()=>{
        setchange("delivered")
    }

    const column = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true


        },
        // {
        //     name: "Email",
        //     selector: row => row.email,
        //     sortable: true

        // },
        
        {
            name: "Phone-NO",
            selector: row => row.phone,
            sortable: true

        },
        {
            name: "Payment-mode",
            selector: row => row.paymentmode,
            sortable: true

        },
        {
            name: "Status",
            selector: row => row.sts,
            sortable: true

        },
        
        {
            name: "Date Of Delivery",
            selector: row => row.del,
            sortable: true

        },

        {
            name: "View",
            selector: row => row.qty,
            sortable: true

        }

    ]


    const data = userdata.map(item => (
        {
            name: <h6 className='ms-1'>{item.username}</h6>,
        
            phone: <h6 className='ms-3'>{item.phone}</h6>,
            paymentmode:<h6 className='ms-5'>{item.paymentmode}</h6>,
            sts:<h6 className='bg-danger text-white p-2 rounded ms-4' >{item.dstatus}</h6>,
            del: <h6 className='ms-5'>{item.deliverydate}</h6>,

            qty: <Link to={'/detail'} state={item}><i class="fa-solid fa-file-pen ms-5"></i></Link> ,
            

            


        }

    ))

    const style = {
        table: {
            style: {

            },
        },
        rows: {
            style: {
                background: "#e3e8a7",
                color: "black", // override the row height
                fontSize: "15px",
                padding: "0px 30px"

            },
        },

        headCells: {
            style: {
                background: "grey",
                color: "white",
                fontSize: "20px",
                padding: "0px 50px"

            },
        },
        cells: {
            style: {

            },
        },
        pagination: {
            style: {
                color: "black"

            },
        }

    }
    return (
        <>
            <Header />
            
                <div className=''>
                    <h1 className='text-center mt-5 text-success'>ORDER DETAILS</h1>

                    <div className='mt-5'>
                        <DataTable columns={column} data={data} pagination customStyles={style} >

                        </DataTable>

                    </div>

                </div>

            
        </>
    )
}

export default Orders