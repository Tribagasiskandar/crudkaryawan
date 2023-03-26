import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function EmpCreate() {
    const [id, idchange]  =useState("")
    const [name, namechange]  =useState("")
    const [email, emailchange]  =useState("")
    const [phone, phonechange]  =useState("")
    const [active, activechange]  =useState(true)
    const [validation, valchange]  =useState(false)
    
    const navigate = useNavigate()


    const handlesubmit = (e) =>{
        e.preventDefault()
        const empdata = {id,name,email,phone,active};
        fetch("http://localhost:8000/Employe",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body : JSON.stringify(empdata)
        }).then((res) =>{
            alert("data disimpan")
            navigate('/')
        }).catch((err) =>{
            console.log(err);
        })
    }
  return (
    <div>
        <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-title">
                        <h1>Employe create</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                           
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">
                                        ID
                                    </label>
                                    <input type="text" className='form-control' value={id} disabled="disabled" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">
                                        Name
                                    </label>
                                    <input type="text" className='form-control' value={name} required onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} />
                            {name.length == 0 && validation && <span className='text-danger'>Enter name</span>}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">
                                        Email
                                    </label>
                                    <input type="text" className='form-control' value={email} onChange={e => emailchange(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">
                                        Phone
                                    </label>
                                    <input type="text" className='form-control' value={phone} onChange={e => phonechange(e.target.value) } />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">
                                   
                                    <input type="checkbox" className='form-check-input' value={active} onChange={e => activechange(e.target.checked)}/>
                                    <label htmlFor="" className='form-check-label'>is active</label>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                   <button type='submit' className='btn btn-success'>Save</button>
                                   <Link to='/' className='btn btn-danger'>Back</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
