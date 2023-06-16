import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Context/UserContext';
import log  from'./login.svg'
import './Log.css'

const Login = () => {
    const navigate=useNavigate();
    const {login}=useContext(AuthContex);

    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/shop'); 
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
    }





    return (
    <div className='log'>
        <div className='pic'> <img src={log} alt="" /></div>
        
        <div className='sec' >
            <h2> Log in here </h2>
        <form onSubmit={handleLogin} >

<input className='in1' type="email" name="email" id=""  placeholder='enter your email' required/><br />
<input className='in1' type="password" name="password" id="" required placeholder='enter your password' /><br />
<button className='btn10' type="submit">Login</button>
</form>
       <p> new this website? <Link to='/signup'> SignUp</Link></p>
        </div>
        </div>
   
    );
};

export default Login;