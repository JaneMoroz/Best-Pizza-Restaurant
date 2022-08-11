import { Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Questions from "./question/Questions";
import { useNavContext } from "../context/nav_context";

const SharedLayout = () => {
  const { closeSubmenu } = useNavContext();
  return (
    <>
      <Navbar />
      <main className="container" onMouseOver={closeSubmenu}>
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
