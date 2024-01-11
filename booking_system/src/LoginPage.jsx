import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function LoginPage(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email,password})

        .then(result => {
            console.log(result)
            if(result.data === "The password is invalid" || result.data === "No Record found" ){
                setErrorMessage('Password or Email is Incorrect');
            }
            else {
                const data = result.data
                navigate('/home', {
                    state: {
                      fname: data.fname,
                      lname: data.lname,
                      mobNo: data.mobNo,
                      email: data.email,
                      image: data.image,
                    },
                  });
              }
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage('An error occurred while logging in');
        });  
    }

    return(

        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 text-center">
               <h2>Login</h2> 

               {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}  
               <form onSubmit={handleSubmit}>

               <div style={{ margin: '40px 0' }}></div>

            
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>

                    <input
                    type='text'
                    placeholder='Enter Your Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input
                    type="password"
                    placeholder='Enter Your Password'
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

        
                <button type='submit' className='btn btn-success w-100 rounded-0 custom-login-button'>
                    Login
                </button>
                </form>

                <div style={{ margin: '20px 0' }}></div>


                <Link to="/signup" className='btn btn-default border w-100 bg-light runded-0 text-decoration-none'>
                Want to Create an Account?
                </Link>

              
            </div>
        </div>
    
    );
}

export default LoginPage;
