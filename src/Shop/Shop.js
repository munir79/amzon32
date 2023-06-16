import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShowProducts from './ShowProducts';
import './Show.css';
import bk1 from './pay2.jpeg'

const Shop = () => {
    const products=useLoaderData();
    console.log(products);
    return (
      <div>
        <div>
        <div className='ShopContainer'>
          <div className='productContainer'>

            {
                products.map(product=><ShowProducts key={product._id} 
                product={product}
                
                ></ShowProducts>)
            }
          </div>


            <div className='cartContainer'>
                <div>
                  {/* <img src={bk1} alt="" /> */}
                 
                  
                </div>
            </div>
         
           

        </div>
        </div>
      </div>
        
    );
};

export default Shop;