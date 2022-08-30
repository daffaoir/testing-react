import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Latihan from "./pages/Latihan";
import Latihan2 from "./latihan2";

export default function App() {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="latihan" element={<Latihan />} />
          <Route path="login" element={<Login />} />
          <Route path="movies" element={<Movies />} />
          <Route path="latihan-2" element={<Latihan2 />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}
