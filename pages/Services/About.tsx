"use client";

import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";


const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="About Us"
        description=""
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Welcome to IGNITAX"
                  paragraph="I am Purvi Trivedi(Founder) and here I'll let you learn about the little story of crazy people behind this business."
                  paragraph2="Once upon a time, in a land far, far away named GOA, I Met bunch of people, we were talking about 7 deadly sins and karmas and blah blah blah, and all of sudden one of them asked, 'How can we make people's life better and easier for virtue?.' And thus, our company was born. We may not have been wearing capes or wielding swords, but we were determined to save our clients from the Work chaos that was swallowing them whole."
                  paragraph3="Our team of misfit geniuses includes virtual assistants from all walks of life, from the tech-savvy to the creative types. We may not be superheroes, but we have a superpower - the ability to take on any task and crush it like a grape."
                  paragraph4="But enough about us. Let's talk about you. We're here to make your life easier, more manageable, and more enjoyable. Whether you're a small business owner or a busy professional, we'll help you regain control of your time and your sanity by providing virtual services you need.  --- So, if you're tired of drowning in a sea of work, let us be your life raft. We'll help you stay afloat, and we promise to throw in a few laughs along the way."
                
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
      
      <Footer />
    </>
  );
};

export default About;
