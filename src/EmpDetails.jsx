import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function EmpDetails() {
    const{empid}=useParams()
    const[empdata, empdatachange] = useState({})

    useEffect(()=>{
        fetch("http://localhost:8000/Employe/"+empid).then((res)=>{
            return res.json()
           
        }).then((resp)=>{
            console.log(resp);
            empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

  return (
    <div>
        <div className="card">
            <div className="card-title">
                <h2>employe create</h2>
            </div>
            <div className="card-body">

            </div>
        </div>


     {  empdata &&
     <div className="">

      <h1>Employe data name : {empdata.name} ({empdata.id})</h1>
     <h3>Contact Detail</h3>
     <h4>Email is : {empdata.email} </h4>
     <h4>Email is : {empdata.phone} </h4>
     <Link to={"/"} className="btn btn-danger">Back Listing</Link>
     </div>
     }

    </div>
  )
}
