import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddCompetition = () => {

  const [values, SetValues]= useState({
    name:'',
    fees:'',
    date:'',
    participants:'',
    description:'',

  })

  const navigate= useNavigate()
  const handleSubmit= (event)=> {

    event.preventDefault();
    axios.post('http://localhost:3000/Users', values)
    .then(res=> {

      console.log(res);
      navigate("/competition")
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container mt-5">
    <h2>Add competition</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name"
        onChange={e=> SetValues({...values, name: e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="fees">fees</label>
        <input type="text" className="form-control" id="fees" placeholder="Enter username" 
                onChange={e=> SetValues({...values, fees: e.target.value})} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="tel" className="form-control" id="date" placeholder="Enter phone number"
                         onChange={e=> SetValues({...values, date: e.target.value})} />
                         
      </div>

      <div className="form-group">
        <label htmlFor="participants">nombre participants</label>
        <input type="tel" className="form-control" id="participants" placeholder="Enter phone number"
                         onChange={e=> SetValues({...values, participants: e.target.value})} />
                         
      </div>


      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="tel" className="form-control" id="description" placeholder="Enter phone number"
                         onChange={e=> SetValues({...values, description: e.target.value})} />
                         
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/competition" className="btn btn-danger"> Go back</Link>

    </form>
  </div>
  )
}

export default AddCompetition