import React from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateUser = () => {
  const [values, SetValues]= useState({
    name:'',
    username:'',
    phone:''
  })

//  const [data, setData]= useState([])
  const { id } = useParams();
  const navigate= useNavigate()

  useEffect(()=> {
      axios.get('http://localhost:3000/Users/' + id)
      .then(res=> {

        SetValues(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  const handleupdate = (event)=>{
    event.preventDefault();
    axios.put('http://localhost:3000/Users/' +id, values)
    .then(res=> {

      console.log(res);
      navigate("/")
    })
    .catch(err => console.log(err))



  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update User</h2>
      <form onSubmit={handleupdate}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name"
           value={values.name}   onChange={e=> SetValues({...values, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" 
          value={values.usernmae}   onChange={e=> SetValues({...values, usernmae: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter phone number"
           value={values.phone}  onChange={e=> SetValues({...values, phone: e.target.value})} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <Link to="/" className="btn btn-danger">Go back</Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
