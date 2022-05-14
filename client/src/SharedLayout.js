import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Testimonials from "./components/testimonials/Testimonials";
import Questions from "./components/question/Questions";

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
