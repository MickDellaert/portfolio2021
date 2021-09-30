import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <Parallax y={[-60, 65]}>
      <div className="hero relative grid grid-cols-8 bg-white mx-6 md:mx-16 2xl:mx-24 my-16 xl:my-32">
        <h1 className="header-title leading-snug col-span-8 2xl:col-start-2 2xl:col-span-7 text-4xl md:leading-snug lg:text-5xl lg:leading-snug">
          Hello! I'm <span className="span line">Mick Dellaert</span>, an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator</span>,
          currently on a <span className="span line">journey ↓</span> of
          becoming a <span className="span">web developer</span>.
        </h1>
      </div>
    </Parallax>
  );
};

export default Hero;
