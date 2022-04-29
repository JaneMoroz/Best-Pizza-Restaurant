import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Menu />
      </main>
    </>
  );
}

export default App;
