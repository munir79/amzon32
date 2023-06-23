import React from 'react';
import pic from './munir-removebg-preview.png';
import nafis from './nafis-removebg-preview.png';
import khan from './khan-removebg-preview (1).png';
import hasan from './rsc-removebg-preview.png'
import './Out.css';
import { Link } from 'react-router-dom';


const OutSide1 = () => {
    return (
        <div className='full2'>
         <div className='about'>
         <div className='des1'>
          <h1>About</h1>
          <p>ecomm.design is a collection of top-notch ecommerce websites.

Do you love browsing design galleries for inspiration but find the only ecommerce  sites featured  tend to be  heavily <br /> design-led boutique fashion websites? Nothing wrong with that, but it can be hard to find more relatable  examples in other industries, especially B2B.

Ecomm.  design aims to <br /> showcase an eclectic mix of  stores across many different verticals, with less of a focus on front-end experimentation and more on the metrics and UX practices that matter to ecommerce</p>
         </div>
         <div className='pic0'>
        <h1>Happy Shoping !!</h1>
        <h2>Grow your Own Bussiness,</h2>
        <h2>Create an Online Shop</h2>
        {/* <button className='free'>Try It Free !!</button> */}
        <Link to='/shop' > <button className='free'>Try It  !!</button></Link>
         </div>

         </div>

<div className='full12'>
{/* <h1> Well Come To Unique Sundarban . </h1> */}
</div>

           
          <div className='team2'>
            <h3> Team of Unique SundarBan </h3>
            <div className='about2'>
                <div className='one2'><img src={pic} alt="" />
                <h5> Name:Jakir Hossain Munir</h5>
                <h3> CEO & Developer at Unique Sundorban</h3>
                phone:01968968569
                <p> <Link>email:jakirhossainmunir79@gmail.com</Link> </p></div>
              <div className='one2'>  <img src={nafis} alt="" />
              <h5> Name: Nafis Fuad Tanvir</h5>
              <h3> Senior Software Engineer at Unique Sundarban </h3>
              phone:01960898988
              <p><Link> email:nafis@gmail.com </Link></p></div>
              <div className='one2'>  <img src={khan} alt="" />
              <h5> Name: Rifat Khan</h5>
              <h3>  Senior Software Engineer at Unique Sundarban</h3>
              phone:0197866987
          <p>    <Link> email:rifatkhan@gmail.com</Link></p></div>
                <div className='one2'>
                <img src={hasan} alt="" />
                <h5> Rifat Khan</h5>
                <h3> Senior Software Engineer at Unique Sundorban</h3>
                phone:0198734554
                <p><Link> email:rifatkhan@gmail.com</Link></p>
                </div>

            </div>
          </div>
        </div>
    );
};

export default OutSide1;