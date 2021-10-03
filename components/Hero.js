import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <Parallax y={[-60, 65]}>
      <div className="hero relative top-0 grid grid-cols-8 bg-white mx-6 md:mx-16 2xl:mx-40 my-16 xl:my-32">
        <h1 className="header-title leading-snug col-span-8 2xl:col-start-2 2xl:col-span-7 text-4xl md:text-5xl lg:text-6xl md:leading-snug 2xl:text-6xl lg:leading-snug 2xl:leading-snug">
          Hello! I'm <span className="span line">Mick Dellaert</span>, <span className="span3"> an experienced </span> <span className="span2">graphic designer</span> <span className="span3">and <span className="span2">dtp-operator</span>, </span> <span className="span3">currently </span> <span className="span3">on a <span className="span line">journey ↓</span> </span> <span className="span3">of becoming </span> <span className="span3">a <span className="span">web developer</span>.</span>
        </h1>
      </div>
    </Parallax>
  );
};

export default Hero;
