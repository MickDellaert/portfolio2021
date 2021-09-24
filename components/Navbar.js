import Link from "next/link";
import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-wrapper fixed bg-green-600 w-full z-10 ">
        <div className="navbar-container mx-14 flex justify-between items-center my-3.5">
          <div className="logo">
            <Link href="/">
              <Image src="/MD_logo_courier.svg" alt="" width={50} height={50} />
            </Link>
          </div>

          <div className="navlinks float-right">
            <Link href="/" passHref>
              <a className="text-black hover:text-white"> Home </a>
            </Link>
            <Link href="/projects" passHref>
              <a className="text-black hover:text-white"> Projects </a>
            </Link>
            <Link href="/about" passHref>
              <a className="text-black hover:text-white"> About </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
