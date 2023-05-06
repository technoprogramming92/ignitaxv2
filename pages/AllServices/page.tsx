import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Link from "next/link";
import React from "react";

const AllServices = () => {
  return (
    <div>
      <Header />
      <Breadcrumb pageName="All Virtual Services" description="" />
      <Services />
      <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
        <Link
          href="/Contact/page"
          className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Book a Call
        </Link>
      </div>
      <div> <p>&nbsp;</p> </div>
      <Footer />
    </div>
  );
};

export default AllServices;
