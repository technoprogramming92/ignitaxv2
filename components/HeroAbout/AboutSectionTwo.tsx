import Image from "next/image";
import HeroTitle from "../Common/HeroTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <HeroTitle
            title="Creating an impact by allowing clients and employees more freedom."
            paragraph=""
            center
          />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/hero/Connected world-bro.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[500px]" data-wow-delay=".2s">
              <div className="mb-9">
                
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We are here to provide dedicated virtual assistant services over a globe by connecting clients with suitable virtual Staff.
                </p>
                
              </div>
              <div className="mb-9">
               
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Are you a small business owner, online entrepreneur, internet marketer, finance professional, CPA, EA or podcaster or any other work professional? You may know those days where you feel like you are juggling too many things at once? No need to worry! We have got your back.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Let us be your circus clowns and take some of those balls off your hands and give you some fresh air to think of how to grow your business further by providing a virtual professional who will take over all that extra load that makes you feel burdened.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
