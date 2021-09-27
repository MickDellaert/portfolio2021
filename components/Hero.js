import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <Parallax y={[-65, 70]}>
      <div className="hero relative grid grid-cols-8  bg-white mx-6 md:mx-16 my-24 xl:my-56 h-full ">
        <h1 className="header-title leading-normal col-span-8 2xl:col-start-2 2xl:col-span-7 text-4xl md:leading-normal lg:text-5xl lg:leading-normal">
          Hello! I'm <span className="span line">Mick</span>,<br /> an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator</span>,<br />
          currently on a <span className="span line">journey</span> of becoming
          a <span className="span">web developer</span>.
          
        </h1>
      </div>
      </Parallax>
  );
};

export default Hero;
