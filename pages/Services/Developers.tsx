"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Developersfeatures from "@/components/Developersfeatures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";



const Developers = () => {
  return (
    <div>
        <Header />
      <Breadcrumb
        pageName="Developers"
        description=""
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Choose Developers"
                  paragraph="Welcome to our Developers section! We understand that the backbone of any tech project is the developers who build it. That's why we offer a variety of services to support your development needs."
                  paragraph2="If you're looking for a reliable development partner, look no further. Contact us today to learn more about our development services and how we can help you bring your ideas to life."
                  paragraph3=""
                  paragraph4=""
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap"></div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/service-images/Photography.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Developersfeatures />
      <Footer />
    </div>
  )
}

export default Developers