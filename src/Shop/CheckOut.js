import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../Context/UserContext';
import './CheckOut.css'

const CheckOut = () => {
    const {user}=useContext(AuthContex);
    const {_id, name,img,price}=useLoaderData();
    const handleorder=event=>{
        event.preventDefault();
        const form=event.target;
        const name1=`${form.firstname.value} ${form.lastname.value} `;
        const email=form.email.value;
        const phone=form.phone.value;
        const messege=form.messege.value;

        const order={
            service:_id,
            serviceName:name,
            price,img,
            

            customer:name1,email,phone,messege

        }
        fetch('http://localhost:5000/orders' , {
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                alert(' thank you  Order Placed Successfuly')
                form.reset();
            }
        })
        
    }
    return (
        <div className='one'>
            <h3> this is Chekout section </h3>
            <img src={img} alt="" />
            <h5> Name:{name}</h5>
            <h4> price:{price}</h4>


            <form onSubmit={handleorder} >

                <input className='in1' type="text" name='firstname' placeholder='enter your first name' required /> <input type="text" name='lastname' className='in1' placeholder='enter your last name' required /><br />
<input className='in1' type="email" name="email" id="" placeholder=' enter your email' defaultValue={user?.email} readOnly required /> <input className='in1' type="text" name="phone" id="" placeholder='enter your phone number' required /><br />
<textarea className='in2' placeholder='write a comment' required name="messege" id="" cols="30" rows="10"></textarea><br />
<input className='btn1' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;