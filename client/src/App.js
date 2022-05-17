import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="menu/:id" element={<SingleItem />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
