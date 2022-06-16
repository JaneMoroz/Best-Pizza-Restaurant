import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Testimonials from "./components/testimonials/Testimonials";
import Questions from "./components/question/Questions";
import { useMenuContext } from "./context/menu_context";

const SharedLayout = () => {
  const { closeSubmenu } = useMenuContext();
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
