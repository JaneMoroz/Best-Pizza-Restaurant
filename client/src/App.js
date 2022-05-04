import React from "react";
import Navbar from "./navigation/Navbar";
import Menu from "./menu/Menu";
import Testimonials from "./testimonials/Testimonials";
import Questions from "./question/Questions";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Menu />
        <section className="more-info-section">
          <Testimonials />
          <Questions />
        </section>
      </main>
    </>
  );
}

export default App;
