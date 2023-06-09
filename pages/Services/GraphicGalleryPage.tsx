"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import GalleryGraphicsMain from "@/components/GalleryGraphicsMain";
import Header from "@/components/Header";

const GraphicGalleryPage = () => {
  return (
    <div>
      <Header />
      <Breadcrumb
        pageName="Gallery"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <GalleryGraphicsMain />
      </section>

      <Footer />
    </div>
  );
};

export default GraphicGalleryPage;
