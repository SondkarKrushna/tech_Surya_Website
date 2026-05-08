import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const PublicLayout = () => {
    return (
        <div className="bg-[#020202] min-h-screen">
            <Navbar />
            <div className="pt-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default PublicLayout