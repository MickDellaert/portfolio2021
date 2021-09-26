import Image from "next/dist/client/image";

const About = () => {
  return (
    <div id="about" className="about-container bg-white h-screen p-4 md:p-16">
      <div className="hero grid grid-cols-8 border-b-2 border-green-600 bg-gray-100 p-16">
        <h1 className="col-span-6 text-4xl leading-relaxed">
          Hello, I'm <span className="span line">Mick</span>,<br /> an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator.</span> <br />
          Currently on a <span className="span line">journey</span> of becoming
          a <span className="span">web developer</span>.
        </h1>
        <div className="portrait col-span-2">
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
    </div>
  );
};

export default About;
