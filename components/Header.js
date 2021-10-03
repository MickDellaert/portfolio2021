import Navbar from "./Navbar";
import Hero from "./Hero";
import { ParallaxProvider } from "react-scroll-parallax";


const Header = () => {
  return (
      <>
    <ParallaxProvider>

    <header className="header-container relative w-full flex flex-col justify-center">
      <Navbar />
      <Hero />
    </header>
    </ParallaxProvider>
    </>

  );
};

export default Header;
