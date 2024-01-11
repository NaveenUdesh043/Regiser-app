
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();       
  const state = location.state || {}; 
  const { fname, lname, mobNo, email , image} = state;

  return (

    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25 text-center">
       <h2>Hello</h2>   
      
        <div className='mb-3 text-center'>
            <label htmlFor='email'>
                <strong>First Name</strong>
            </label>
            <input
            type='text'
            placeholder='Your First Name'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            value={fname}
            readOnly
            />
        </div>


        <div className='mb-3 text-center'>
            <label htmlFor='email'>
                <strong>Last Name</strong>
            </label>
            <input
            type='text'
            placeholder='Your Last Name'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            value={lname}
            readOnly
            />
        </div>


        <div className='mb-3 text-center'>
            <label htmlFor='email'>
                <strong>Mobile Number</strong>
            </label>

            <input
            type='text'
            placeholder='Your Mobile Number'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            value={mobNo}
            readOnly
            />
        </div>


        <div className='mb-3 text-center'>
            <label htmlFor='email'>
                <strong>Email</strong>
            </label>

            <input
            type='text'
            placeholder='Your Email'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            value={email}
            readOnly
            />
        </div>


        <div className="profile flex justify-center py-4">
      <img
        src={image}
        alt="Your Image"
        className="img-fluid rounded-Square border"
        style={{ width: '100px', height: '100px' }}
      />
    </div>

    <Link to="/">
        <button className="get-started-button">Logout</button>
      </Link>
    </div>
</div>
);
}