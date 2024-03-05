import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const NavigationBar = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='bg-white border shadow p-4' style={{ width: '80%', maxWidth: '800px' }}>

        <Link to="/competition"> Competition</Link>

                       

    </div>
</div>  )
}

export default NavigationBar