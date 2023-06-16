import React from 'react';
import './Shouwproducts.css'
import { Link } from 'react-router-dom';


const ShowProducts = (props) => {
    console.log(props.product);
    const { _id,img,name,price,seller}=props.product;
    return (
        <div className='name'>
            <img src={img} alt="" />
           <div className='name3'>
            
           <h4 className='name1' > Name:{name}</h4>
           <h5> Price:{price}</h5>
           <h5> Brand:{seller}</h5>
           </div>
           <Link to={`/products/${_id}`} >
           <button className='btn10' > Buy Now</button></Link>
        </div>
    );
};

export default ShowProducts;