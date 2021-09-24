import Navbar from "./Navbar";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default Layout;
