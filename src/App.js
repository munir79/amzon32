import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Shop from './Shop/Shop';
import CheckOut from './Shop/CheckOut';
import OutSide1 from './OutSide/OutSide1';
import Login from './Auth/Login';
import Registar from './Auth/Registar';
import Orders from './Shop/Orders';

function App() {
  const route=createBrowserRouter([
  
   
    {

      
     path:'/',
     element:<Main></Main> ,
     children:[
      {
        path:'/',
        element:<Shop></Shop>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/products/:id',
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        
      },
      {
        path:'/out',
        element:<OutSide1></OutSide1>
      },
      {
        path:'/login',
        element:<Login></Login>
      }, 
      {
        path:'/signup',
        element:<Registar></Registar>
      },{
        path:'/orders',
        element:<Orders></Orders>
      }

     
     ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
     
    </div>
  );
}

export default App;
