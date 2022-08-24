import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </LayoutComponent>
    </>
  );
}
