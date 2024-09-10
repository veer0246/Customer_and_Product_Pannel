import React from 'react'

import {Outlet} from 'react-router-dom'
import ProductNavbar from './Products/ProductNavbar'

export default function ProductApp() {
  return (
    <div>
      <ProductNavbar/>
      <Outlet/>
    </div>
  )
}
