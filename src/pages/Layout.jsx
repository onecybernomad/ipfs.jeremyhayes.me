import { Flowbite } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import TopNav from '../components/TopNav'

const Layout = () => {
  return (
    <>
        <Flowbite>
        <TopNav />
        <Outlet />
        <SiteFooter />
        </Flowbite>
    </>
  )
}

export default Layout