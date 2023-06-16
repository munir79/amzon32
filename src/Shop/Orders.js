import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Context/UserContext';
import ViewOrder from './ViewOrder';
import './Order.css'
import { Link } from 'react-router-dom';
import pic from './pay2.jpeg'

const Orders = () => {
    const {user}=useContext(AuthContex);
    const [orders,setOrders]=useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user?.email])
    console.log(orders);

let total=0;
      for(const product of orders){
        total= total+product.price;
       
    }
    console.log(total);

    const handleDelete=order=>{
      const agree=window.confirm(`are you sure want to Cancel This Order :${order.serviceName}`);
      console.log(agree);
      if(agree){
          fetch(`http://localhost:5000/orders/${order._id}`,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.deletedCount>0){
             alert('your order cancel sucessfully');
          //    const remainningUsers=displayOrder.filter(odr=>odr._id !== order._id);
          // setDispalyOrder(remainningUsers);
              }
          });
      }
  }
    return (
        <div className='div2' >
            <h3 className='upp'> you have {orders.length} orders</h3>
            
  

<div className='grid' >
  <div className='cols_4' >
    <div className='product_grid' >
  <div>
 <h3>    ServiceName</h3>
  </div>
  <div>
  <h3>  price</h3>
  </div>
  <div>
   <h3> Cancel Order </h3>
  </div>
  {
             orders.map(order=><React.Fragment key={order._id}><div className='remove'>
           
             <div className='div1'>
             <img src={order.img} alt="" /><br />
               {order.serviceName}
         
             </div>
            </div>
            <div className='par'>
            <h5> $ {order.price}</h5>
            </div>
            <div className='un'> <button className='btn'  onClick={()=>handleDelete(order)} >Cancel Order</button></div> </React.Fragment>)
             }
    </div>
  </div>
  <div className='total' >
    <h4> sidebar</h4>
    <h3 className='cost1'> Total cost: ${total}</h3>
   <div><img src={pic} alt="" /></div>
   <div className='btn20'>
 
    <Link to='/out' className='btn'> Payment now :$ {total} </Link>
   </div>

  </div>

</div> 
        </div>
    );
};

export default Orders;