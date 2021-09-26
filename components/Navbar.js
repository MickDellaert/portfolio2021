import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div
        className="navbar-wrapper fixed top-0 left-0 right-0 w-full z-10 bg-white" 
      >
        <div className={`navbar-container flex justify-between items-center mx-4 md:mx-16 py-4 ${
          router.pathname !== "/" ? "bg-white border-b-2 border-green-600" : "bg-white border-b-2 border-green-600"
        }`}>
          <div className="logo-container">
              <div className="logo">
            <Link href="/">
              <Image
                src={
                  router.pathname !== "/"
                    ? "/MD_logo_courier.svg"
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
            <Link href="/" passHref>
              <a
                className={` ${
                  router.pathname !== "/"
                    ? "text-black hover:text-black"
                    : "text-black hover:text-black"
                }`}
              >
                {" "}
                Home{" "}
              </a>
            </Link>
            <Link href="/#projects" passHref>
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
