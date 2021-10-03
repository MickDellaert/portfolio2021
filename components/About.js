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
              Hello again, I'm Mick, a graphic designer, creative dtp-operator
              and junior web developer from Antwerp. Nice to meet you.
              <br></br>
              <br></br>

              Above are some of the projects I made during a six months full time training
              at BeCode Antwerp, they represent the first steps I have been
              taking in my ambition of becoming a web developer. More projects
              can be found on my Github profile. 
              <br></br>
              <br></br>

              Previously, during my career as a graphic designer I have worked on a broad range of projects:
              making layouts for books, magazines, advertisments and news
              papers; designing POS-materials, logo's, trade stands, interactive
              magazines, websites and illustrations.
              <br></br>
              <br></br>
              I would love to add a more dynamic and interactive layer to my skills and enter the world of
              web development with it's endless posibilities and exciting
              prospects. Currently I am actively looking for an internship and
              continue my journey.
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
