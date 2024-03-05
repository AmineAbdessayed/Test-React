import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Competitions = () => {


    const [data, setData]= useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/Users')
        .then(res=>setData(res.data))
        .catch(err => console.log(err))
    }, [])



  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='bg-white border shadow p-4' style={{ width: '80%', maxWidth: '800px' }}>
        <h1 className="text-center mb-4">List of Competitions</h1>

        <Link to="/add" className='btn btn-primary'> Add Competition</Link>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Fees</th>
                    <th>Date</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.fees}</td>
                            <td>{d.date}</td>
                            <td>
                             
                                <Link  to={`/read/${d.id}`}className='btn btn-sm btn-info'>Details</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>  )
}

export default Competitions