import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Testimonials from "./Testimonials";
import Questions from "./Questions";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Menu />
        <section class="more-info-section">
          <Testimonials />
          <Questions />
        </section>
      </main>
    </>
  );
}

export default App;
