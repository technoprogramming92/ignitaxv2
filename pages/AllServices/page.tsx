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
            pageName="All Services"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
        <Services />
        <Footer />
    </div>
  )
}

export default AllServices