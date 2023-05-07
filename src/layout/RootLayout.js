import React from 'react'
import Header from '../components/Header_components/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <Header />
        <Outlet />
    </div>
  )
}
