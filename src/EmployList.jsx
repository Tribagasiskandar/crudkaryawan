import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

export default function EmployList() {

    const [empdata, empdatachange] = useState(null)

    const navigate = useNavigate()

    const LoadDetail = (id) =>{
        navigate("/details/"+id)
    }

    const LoadEdit = (id) =>{
        navigate("/edit/"+id)
    }

    const Removefunction = (id) =>{
        if(window.confirm("apakah anda ingin menghapusnya")){
            fetch("http://localhost:8000/Employe/"+ id,{
                method: "DELETE"
              
            }).then((res) =>{
                alert("data dihapus")
             window.location.reload()
            }).catch((err) =>{
                console.log(err);
            })
        }
    }

    useEffect(()=>{
        fetch("http://localhost:8000/Employe").then((res)=>{
            return res.json()
           
        }).then((resp)=>{
            console.log(resp);
            empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
  return (
    <div className='container '>
        <div className="card">
            <div className="card-title">
                <h2>Employ Listing</h2>
            </div>
            <div className="card-body">
                <div className="">
                    <Link to="/create" className='btn btn-success'>
                        Add New +
                    </Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name:</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                  
                     {
                        empdata &&
 empdata.map((item) => (

    <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td><a onClick={() => {LoadEdit(item.id)}} href="" className='btn btn-success'>Edit</a>
    <a onClick={() => {Removefunction(item.id)}} href="" className='btn btn-danger'>Remove</a>
    <a onClick={() => {LoadDetail(item.id)}} href="" className='btn btn-primary'>Details</a>
    </td>
</tr>

  
 )) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
