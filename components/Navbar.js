import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";
import { useState, Fragment } from "react";

const Navbar = () => {
  const router = useRouter();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  return (
    <Fragment>
      <nav>
        <div className="navbar-wrapper fixed top-0 left-0 right-0 w-full z-10 bg-white">
          <div
            className={`navbar-container flex justify-between items-end mx-6 md:mx-16 py-4 ${
              colorChange
                ? "bg-white border-b-2 border-white"
                : "bg-white border-b-2 border-green-600"
            }`}
          >
            <div className="logo-container">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={
                      colorChange
                        ? "/MD_logo_courier_green.svg"
                        : "/MD_logo_courier.svg"
                    }
                    alt="logo"
                    width={40}
                    height={40}
                  />
                  {/* <Image src="/MD_logo_courier.svg" alt="" width={30} height={30} /> */}
                </Link>
              </div>
            </div>

            <div className="navlinks">
              {/* <Link href="/" passHref>
                <a className={`${colorChange ? "text-green-600 hover:text-black" : "text-black hover:text-green-600"}`}>Home</a>
              </Link> */}
              <Link href="/#projects" passHref>
              <a className={`${colorChange ? "text-green-600 hover:text-black" : "text-black hover:text-green-600"}`}>Projects</a>
              </Link>
              <Link href="/#about" passHref>
              <a className={`${colorChange ? "text-green-600 hover:text-black" : "text-black hover:text-green-600"}`}>About</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
