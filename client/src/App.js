import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="menu/:id" element={<SingleItem />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
