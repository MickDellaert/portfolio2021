const Hero = () => {
  return (
      <div className="hero grid grid-cols-8  bg-white justify-center items-center mx-4 md:mx-16 mt-32 mb-20 md:mt-64 md:mb-56">
        <h1 className="header-title col-span-8 md:col-start-2 md:col-span-6 text-3xl leading-normal md:text-5xl md:leading-normal">
          Hello, I'm <span className="span line">Mick</span>,<br /> an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator</span>.<br />
          Currently on a <span className="span line">journey</span> of becoming
          a <span className="span">web developer</span>.
          
        </h1>
      </div>
  );
};

export default Hero;
