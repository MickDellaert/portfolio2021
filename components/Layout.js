import Navbar from "./Navbar";
import Test from "./test";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default Layout;
