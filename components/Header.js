import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
    return ( <header className="header-container w-full flex flex-col justify-center">
        <Navbar/>
        <Hero/>
    </header> );
}
 
export default Header;