import { Link, Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Questions from "./question/Questions";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
        <section className="more-info-section">
          <Testimonials />
          <Questions />
        </section>
      </main>
    </>
  );
};
export default SharedLayout;
