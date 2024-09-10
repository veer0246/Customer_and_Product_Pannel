import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CustomerApp from './CustomerApp.jsx'
import ProductApp from './ProductApp.jsx'
import AddCustomer from './Customers/AddCustomer.jsx'
import CustomerPannel from './Customers/CustomerPannel.jsx'
import ViewCustomer from './Customers/ViewCustomer.jsx'
import UpdateCustomer from './Customers/UpdateCustomer.jsx'
import AddProduct from './Products/AddProduct.jsx'
import AddCategory from './Products/AddCategory.jsx'
import ProductPannel from './Products/ProductPannel.jsx'
import ViewProduct from './Products/ViewProduct.jsx'
import UpdateProduct from './Products/UpdateProduct.jsx'
import Home from './Home.jsx'

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
    
      <Route path='/customers' element={<CustomerApp />}>
        <Route path='' element={<CustomerPannel />} />
        <Route path='/customers/view/:id' element={<ViewCustomer />} />
        <Route path='/customers/update/:id' element={<UpdateCustomer/>} />
        <Route path='/customers/addCustomer' element={<AddCustomer/>} />
      </Route>

      <Route path='/products' element={<ProductApp />}>
        <Route path='' element={<ProductPannel />} />
        <Route path='/products/addProduct' element={<AddProduct />} />
        <Route path='/products/addCategory' element={<AddCategory />} />
        <Route path='/products/view/:id' element={<ViewProduct />} />
        <Route path='/products/update/:id' element={<UpdateProduct/>} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

