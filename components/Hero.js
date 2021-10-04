import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="hero relative grid grid-cols-8 bg-white mx-6 md:mx-16 2xl:mx-40 my-8 md:my-20 lg:my-28 xl:mt-32 xl:mb-16 2xl:mt-44 2xl:mb-28"
      style={{
        transform: `translateY(${offset * 0.2}px)`,
      }}
    >
      <h1 className="header-title col-span-8 2xl:col-start-2 2xl:col-span-7 text-4xl leading-snug md:text-5xl md:leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug 2xl:leading-snug">
        Hello! I'm <span className="span-green">Mick Dellaert</span>,{" "}
        <span className="span-nowrap"> an experienced </span>{" "}
        <span className="span-grey">graphic designer</span>{" "}
        <span className="span-nowrap">
          and <span className="span-grey">dtp-operator</span>,{" "}
        </span>{" "}
        <span className="span-nowrap">currently </span>{" "}
        <span className="span-nowrap">
          on a <span className="span-green">journey ↓</span>{" "}
        </span>{" "}
        <span className="span-nowrap">of becoming </span>{" "}
        <span className="span-nowrap">
          a <span className="span-green">web developer</span>.
        </span>
      </h1>
    </div>
  );
};

export default Hero;
