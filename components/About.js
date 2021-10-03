import Image from "next/dist/client/image";

const About = () => {
  return (
    <>
      <div id="about" className="about-anchor"></div>

      <section className="about-container bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-6 md:mx-16 2xl:mx-40 pt-6 md:pt-16 2xl:pt-32">
          <h1 className="header-title leading-relaxed text-4xl text-green-600">
            About
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-6 md:mx-16 2xl:mx-40 md:pb-16 2xl:pb-32">
          <div className="about-text mt-6 md:mt-0 md:col-span-4 lg:col-span-6 2xl:col-start-1 ">
            <p className="text-xl leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur, eligendi autem magnam eveniet molestiae officiis
              explicabo atque tenetur rem debitis hic deserunt vitae quia nemo
              laboriosam sit, iusto quod! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam consequuntur, eligendi autem magnam
              eveniet molestiae officiis explicabo atque tenetur rem debitis hic
              deserunt vitae quia nemo laboriosam sit, iusto quod! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Totam consequuntur,
              eligendi autem magnam eveniet molestiae officiis explicabo atque
              tenetur rem debitis hic deserunt vitae quia nemo laboriosam sit,
              iusto quod!
            </p>
          </div>
          <div className="portrait mb-6 md:mb-0 md:col-span-4 lg:col-span-2">
            <Image
              layout="responsive"
              objectFit="cover"
              src={"/portret/portret_mick_duotoon_2021.jpg"}
              alt={"mick"}
              width={200}
              height={200}
              className={"image"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
