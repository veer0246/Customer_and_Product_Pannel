import React from 'react'

import CustomerNavbar from './Customers/CustomerNavbar'
import {Outlet} from 'react-router-dom'

export default function CustomerApp() {
  return (
    <div>
      <CustomerNavbar/>
      <Outlet/>
    </div>
  )
}
