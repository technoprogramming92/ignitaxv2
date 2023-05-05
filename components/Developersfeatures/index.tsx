import Link from "next/link";
import SingleService from "./SingleService";
import serviceData from "./serviceData";

const Services = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-15">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {serviceData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
        <Link
          href="/Contact/page"
          className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
};

export default Services;
