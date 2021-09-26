const About = () => {
  return (
    <div id="about" className="about-container flex bg-white h-screen p-4 md:p-16">
     <div className="hero grid grid-cols-8 border-b-2 border-green-600 bg-gray-100 justify-center items-center">
      <h1 className="col-start-2 col-span-4 text-4xl leading-relaxed">
        Hello, I'm <span className="span line">Mick</span>,<br /> an experienced{" "}
        <span className="span2">graphic designer</span> and{" "}
        <span className="span2">dtp-operator.</span> <br />Currently on a{" "}
        <span className="span line">journey</span> of becoming a{" "}
        <span className="span">web developer</span>.
      </h1>
    </div>
    </div>
  );
};

export default About;
