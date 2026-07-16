import Navbar from "../components/navigation/Navbar";
import Footer from "./Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="container py-5">{children}</main>

      <Footer />
    </>
  );
}

export default PublicLayout;