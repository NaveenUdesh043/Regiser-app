import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function SignupPage(){

    const [fname, setFirstName] = useState("")
    const [lname, SetLastName] = useState("")
    const [mobNo, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate()

    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };


    const handleSubmit = async (e)=>{
        e.preventDefault()
        if (!fname || !lname || !mobNo || !email || !password || !image) {
            setErrorMsg("Fill all details");
        } else if (mobNo.length !== 10) {
            setErrorMsg("Invalid phone number");
        }
        else{

            const formData = new FormData();
formData.append('fname', fname);
formData.append('lname', lname);
formData.append('mobNo', mobNo);
formData.append('email', email);
formData.append('password', password);
formData.append('image', image);
       const resultt = await axios.post('http://localhost:3001/register', formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        
        .then(result => {console.log(result)
            
            navigate('/home', {
                state: {
                  fname: fname,
                  lname: lname,
                  mobNo: mobNo,
                  email: email,
                  image: result.data.image,
                },
              });
        })
        .catch(err => console.log(err))
    }
    }


    return(
        
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 text-center">
               <h2>Signup</h2>   
               {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}  
               <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>First Name</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Your First Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>


                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Last Name</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Your Last Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => SetLastName(e.target.value)}
                    />
                </div>


                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Mobile Number</strong>
                    </label>
                    <input
                    type='text'
                    placeholder='Enter Your Mobile Number'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>


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

                <div style={{ margin: '20px 0' }}></div>
                    
                <div>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    />
                </div>

                <div style={{ margin: '20px 0' }}></div>

                <button type='submit' className='btn btn-success w-100 rounded-0 custom-login-button'>
                    Signup
                </button>
                

                </form>
              
                <Link to="/login" className='btn btn-default border w-100 bg-light runded-0 text-decoration-none'>
                Already Have an Account?
                </Link>
            </div>
        </div>
    );
}

export default SignupPage;
