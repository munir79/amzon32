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