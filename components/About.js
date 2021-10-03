import Image from "next/dist/client/image";

const About = () => {
  return (
    <>
      <div id="about" className="about-anchor"></div>

      <section className="about-container bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-6 md:mx-16 2xl:mx-40 md:py-16">
          <div className="portrait mt-6 md:mt-0 md:col-span-2 2xl:col-start-2">
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
          <div className="about-text mb-6 md:col-span-6 2xl:col-start-4 2xl:col-end-8">
            <h1 className="header-title leading-snug  text-4xl ">About me</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur, eligendi autem magnam eveniet molestiae officiis
              explicabo atque tenetur rem debitis hic deserunt vitae quia nemo
              laboriosam sit, iusto quod!

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur, eligendi autem magnam eveniet molestiae officiis
              explicabo atque tenetur rem debitis hic deserunt vitae quia nemo
              laboriosam sit, iusto quod!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
