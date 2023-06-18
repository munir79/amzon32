import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='footer'>
        <div className='fot1'>
        <div className='div100'>
            <h4>Content</h4>
            <p>Blog</p>
            <p>New Asset</p>
            <p>Search trends</p>
            <p>The Most Popular Brand</p> 
        </div>
           <div className='div101'>
            <h4> Information </h4>
            <p> Pricing </p>
            <p> About us </p>
            <p> Bussiness</p>
            <p> Sell Your Product</p>
           </div>
        </div>
           <div className='legal'>
            <h4> Legal </h4>
            <p> Privacy </p>
            <p>  Cookies Policy</p>
            <p>Licence Agreement </p>
            <p> Terms and Condition</p>
            <p> Cheek Cookies Seetings</p>
            <p> Read Copyright Information </p>
            
           
            <h2> Support </h2>
            <p> FAQ</p>
            <p> Contact</p>
           </div>
           <div>
            <h4>Follow</h4>
          {/* Facebook:  <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon> */}
        
           </div>

       
        </div>
        
    );
};

export default Footer;