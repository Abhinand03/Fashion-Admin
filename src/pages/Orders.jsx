import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import DataTable from 'react-data-table-component'
import { getorder, getuser } from '../services/Allapi'
function Orders() {
    
    const [userdata, setuserdata] = useState([])
    const [status ,setstatus]=useState(false)

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

    const column = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true


        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true

        },
        {
            name: "Addres",
            selector: row => row.address,
            sortable: true

        }
        ,
        {
            name: "Phone-NO",
            selector: row => row.phone,
            sortable: true

        },
        {
            name: "Payment-mode",
            selector: row => row.paymentmode,
            sortable: true

        }
    ]


    const data = userdata.map(item => (
        {
            name: item.username,
            email: item.email,
            address: item.adress,
            phone: item.phone,
            paymentmode:item.paymentmode,
            


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
                    <h1 className='text-center mt-5 text-success'>USER DETAILS</h1>

                    <div className='mt-5'>
                        <DataTable columns={column} data={data} pagination customStyles={style} >

                        </DataTable>

                    </div>

                </div>

            
        </>
    )
}

export default Orders