import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import serviceData from "./serviceData";

const Services = () => {
    return (
      <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-15">
        <div className="container">
          <SectionTitle
            title=""
            paragraph=""
            paragraph2=""
            paragraph3=""
            paragraph4=""
            center
          />
  
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {serviceData.map((service) => (
              <div key={service.id} className="w-full">
                <SingleService service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;