import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
    return ( <div className="header-container flex flex-col w-full">
        <Navbar/>
        <Hero/>
    </div> );
}
 
export default Header;