import React, { useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import './in.css'


function Invoice({prop}) {
    console.log(prop);
    const [amt,setamt]=useState("")
    

   
    const doc = new jsPDF()
    autoTable(doc, {
        body: [
            [
                {
                    content:"Fashoin-Store",
                    styles:{
                        halign:'left',
                        fontSize:20,
                        textColor:"white"

                    }
                },
                {
                    content:"Invoice",
                    styles:{
                        halign:"right",
                        fontSize:20,
                        textColor:"white"


                    }
                }

            ]
        ],
        theme:'plain',
        styles:{
            fillColor:"red"
        }
    })
    autoTable(doc, {
        body: [
            [
                {
                    content:"Customer Detials",
                    styles:{
                        halign:'left',
                        fontSize:14

                    }
                }
                

            ]
        ]
    })
    autoTable(doc, {
        body: [
            [
                {
                    content:prop?.username+'\n'+
                    prop?.phone+'\n'+prop?.adress+','+prop?.locality+'\n'+
                    prop?.dist+','+prop?.state+'\n'+prop?.pincode
                    
                    ,
                    styles:{
                        halign:'left',
                        fontSize:10,
                        

                    }
                },
                {
                    content:"Order Id :"+prop._id+'\n'+"PaymentMode:"+prop?.paymentmode,
                    styles:{
                        halign:'right',
                        fontSize:10
                    }
                    
                }
                
                

            ]
        ],
        theme:'plain'
    })
    autoTable(doc, {
        body: [
            [
                {
                    content:"Amount "+prop.price,
                    styles:{
                        halign:'left',
                        fontSize:10,


                    }
                },
                {
                    content:"Payement Mode "+prop.paymentmode,
                    styles:{
                        halign:'right',
                        fontSize:10,


                    }
                }
                

            ]
        ],
        
        
    })
    autoTable(doc, {
        body: [
            [
                {
                    content:"Product Detials",
                    styles:{
                        halign:'left',
                        fontSize:14

                    }
                }
                

            ]
        ]
    })
    autoTable(doc,{
        head:[["Name","Color","Quantity","price"]],
        body:[[prop?.title,prop?.color,prop?.quantity,prop.price]]
    })
    const invoice=()=>{
        
        return doc.save("Invoice")
    }
    return (
       <>
       <button onClick={invoice} className="btton">Get Invoice</button>
       </>
    )
}

export default Invoice