// src/components/Layout.jsx
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-24  px-6 max-w-5xl mx-auto">{children}</main>
  </>
);

export default Layout;
