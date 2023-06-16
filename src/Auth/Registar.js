import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Context/UserContext';
import pic from './sibg-removebg-preview.png'
import './Log.css'

const Registar = () => {
    const {createUSer}=useContext(AuthContex);
    const handleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

     createUSer(email,password)
     .then(result=>{
        const user=result.user;
        console.log(user);
        form.reset();
     })
     .catch(error=>{
        console.error(error);
     })

    }
    return (
        <div className='log'>
            <div className='pic'><img src={pic} alt="" /></div>
          
            <div className='sec'>
            <h2> Sign Up Here </h2>
        <form onSubmit={handleLogin} >

<input className='in1' type="email" name="email" id=""  placeholder='enter your email' required/><br />
<input className='in1' type="password" name="password" id="" required placeholder='enter your password' /><br />
<button className='btn10' type="submit">SignUp</button>
</form>
       <p> Already have an Account? <Link to='/login'>login</Link></p>
        </div>
        </div>
    );
};

export default Registar;