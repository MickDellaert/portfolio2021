const Hero = () => {
  return (
      <div className="hero grid grid-cols-8  bg-white justify-center items-center mx-4 md:mx-16">
        <h1 className="col-span-8 md:col-start-2 md:col-span-6 text-lg leading-relaxed md:text-4xl md:leading-relaxed">
          Hello, I'm <span className="span line">Mick</span>,<br /> an
          experienced <span className="span2">graphic designer</span> and{" "}
          <span className="span2">dtp-operator.</span> <br />
          Currently on a <span className="span line">journey</span> of becoming
          a <span className="span">web developer</span>.
        </h1>
      </div>
  );
};

export default Hero;
