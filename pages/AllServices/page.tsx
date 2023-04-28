import Breadcrumb from '@/components/Common/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Services from '@/components/Services'
import React from 'react'

const AllServices = () => {
  return (
    <div>
        <Header />
        <Breadcrumb
            pageName="All Virtual Services"
            description=""
        />
        <Services />
        <Footer />
    </div>
  )
}

export default AllServices