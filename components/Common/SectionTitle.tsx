const SectionTitle = ({
    title,
    paragraph,
    paragraph2,
    paragraph3,
    paragraph4,
    width = "570px",
    center,
    mb = "100px",
  }: {
    title: string;
    paragraph: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
          data-wow-delay=".1s"
          style={{ maxWidth: width, marginBottom: mb }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {title}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
          <br/>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph2}
          </p>
          <br/>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph3}
          </p>
          <br/>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph4}
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitle;
  