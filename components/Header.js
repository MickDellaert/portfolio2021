import Navbar from "./Navbar";
import Hero from "./Hero";
import { ParallaxProvider } from "react-scroll-parallax";


const Header = () => {
  return (
      <>
    <Navbar />

    <ParallaxProvider>

    <header className="header-container relative w-full flex flex-col justify-center">
      <Hero />
    </header>
    </ParallaxProvider>
    </>

  );
};

export default Header;
