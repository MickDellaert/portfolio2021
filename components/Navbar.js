import Link from "next/link";
import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <div className="logo">
            <Link href="/">
              <Image src="/MD_logo_courier.svg" alt="" width={50} height={50} />
            </Link>
          </div>

          <div className="navlinks">
            <Link href="/">
              <a> Home </a>
            </Link>
            <Link href="/projects">
              <a> Projects </a>
            </Link>
            <Link href="/about">
              <a> About </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
