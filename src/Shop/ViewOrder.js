import React, { useState } from 'react';
import './ViewOrder.css'

const ViewOrder = () => {

 
    // const [displayOrder,setDispalyOrder]=useState({order});
    // const handleDelete=order=>{
    //     const agree=window.confirm(`are you sure want to Cancel This Order :${order.serviceName}`);
    //     console.log(agree);
    //     if(agree){
    //         fetch(`http://localhost:5000/orders/${order._id}`,{
    //             method:'DELETE'
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data);
    //             if(data.deletedCount>0){
    //            alert('your order cancel sucessfully');
    //         //    const remainningUsers=displayOrder.filter(odr=>odr._id !== order._id);
    //         // setDispalyOrder(remainningUsers);
    //             }
    //         });
    //     }
    // }

//   console.log(order);
//     let total=0;
    // const { price,serviceName,img}=order;
    
  

   
    return (

    <div></div>

//    <div className='main'>
//        <div>
//        <tr>
//             <th>
//                 <label className='btn' htmlFor=""><button  onClick={()=>handleDelete(order)} >Remove</button></label>
//             </th>
// <td>
//     <div className='flexhobe'>
//         <div>
//             <img src={img} alt="" /><br />
//              {serviceName}
//         </div>
//         <div className='service'>
         
           
//         </div>
//     </div>
// </td>

// <td className='tad'>
//    <div className='price'>
//     <p className='par'>{price}</p></div>
   
// </td>
// </tr>
//        </div>
//    </div>



//         // <div>
  
    
            
//         //     <img src={img} alt="" />
//         //    <h3> name:{serviceName}</h3>
//         //    <h4> price:{price}</h4>
//         // </div>
    );
};

export default ViewOrder;