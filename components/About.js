import Image from "next/dist/client/image";

const About = () => {
  return (
    <>
      <div id="about" className="about-anchor"></div>

      <section className="about-container bg-gray-100 p-6 md:p-16 2xl:px-40">
        {/* <div className="grid grid-cols-1 md:grid-cols-8 gap-6 mx-6 md:mx-16 2xl:mx-40 pt-6 md:pt-16 2xl:pt-32">
          <h1 className="header-title leading-normal text-4xl text-green-600">
            About
          </h1>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
          <div className="about-text md:col-span-8 xl:col-span-5 xl:row-span-2 2xl:col-span-5">
            <h1 className="header-title leading-normal text-4xl text-black mb-4">
              About
            </h1>
            <p className="text-xl leading-relaxed">
              Hi, I'm Mick, an experienced graphic designer, knowledgeable dtp-operator, and aspiring
              web developer from Antwerp. Nice to meet you, welcome to my portfolio.
              <br></br>
              <br></br>
              On this website you can find some of the projects made with new skills I gained during a seven-month full-time Junior Web Developer training 
              at BeCode Antwerp. 
              They represent the first steps I have been taking in my ambition of becoming a full stack developer with an emphasis on front-end. 
              More projects can be found on my  <a href="https://github.com/MickDellaert" target="_blank">Github</a> profile.
              <br></br>
              <br></br>
              Up until now I have been working in the graphic design industry, mainly for printed output.
              During my <a href="https://www.linkedin.com/in/mick-dellaert" target="_blank">career</a> I have worked on a broad range of projects: making layouts for books, magazines, advertisements, and newspapers; designing packaging, POS materials, logos,
              exhibition stands, interactive magazines, websites, and illustrations. 
              <br></br>
              <br></br>
              Currently, I would love to add a more dynamic and interactive
              dimension to my skills and enter the world of web development with
              its endless possibilities and exciting prospects. At the moment I
              am actively looking for an internship, hoping to contribute and
              complete my new knowledge in a fresh position and continue my
              journey. If I sparked your interest, don't hesitate to <a href = "mailto: mickdellaert@yahoo.com">contact</a> me.
              
            </p>
          </div>
          <div className="portrait mt-6 xl:mt-0 md:col-span-3 xl:col-span-2 xl:col-start-7 md:mt-6 2xl:col-span-2 2xl:col-start-7">
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
          <div className="contact font-bold text-green-500 text-xl my-6 md:mb-0 md:col-span-4 xl:col-span-2 xl:col-start-7 2xl:col-span-2 2xl:col-start-7 self-end">
            <h1 className="leading-normal text-4xl text-black mb-4">
              Contact
            </h1>
            <a className="contact-link leading-relaxed" href="https://www.linkedin.com/in/mick-dellaert" target="_blank">LinkedIn</a>
            <a className="contact-link leading-relaxed" href="https://github.com/MickDellaert" target="_blank">Github</a>
            <p className="contact-link leading-relaxed">0488 244 705</p>
            <a className="contact-link leading-relaxed" href = "mailto: mickdellaert@yahoo.com">mickdellaert@gmail.com</a> 
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
