"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import ImageGalleryMain from "@/components/ImageGalleryMain";
import Header from "@/components/Header";

const PhotographyGallery = () => {
  return (
    <div>
      <Header />
      <Breadcrumb
        pageName="Gallery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <ImageGalleryMain />
      </section>

      <Footer />
    </div>
  );
};

export default PhotographyGallery;
