import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CompetionDetails = () => {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3000/Users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white border shadow p-4' style={{ width: '80%', maxWidth: '800px' }}>
        <h2>Detail of user</h2>
        <div className="mb-2">
          <strong>Name : {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Fees : {data.fees}</strong>
        </div>
        <div className="mb-2">
          <strong>Date : {data.date}</strong>
        </div>
        <div className="mb-2">
          <strong> Participants : {data.participants}</strong>
        </div>
        <div className="mb-2">
          <strong>Description : {data.description}</strong>
        </div>
        <button disabled={Number(data.participants) === 0} className="btn btn-primary mr-2">Participer</button>        <Link to="/" className="btn btn-danger"> Go back</Link>
      </div>
    </div>
  )
}

export default CompetionDetails