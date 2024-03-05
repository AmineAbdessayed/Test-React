import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NavigationBar from './App/Components/NavigationBar'

const Home = () => {
    const [message, setMessage] = useState('Welcome to our Competition World');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage(null);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            {message && <div className="alert alert-success">{message}</div>}
            <NavigationBar/>
        </div>
    )
}

export default Home