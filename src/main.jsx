import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Photos from "./pages/Photos";
import "./sass/main.scss";
import Blogs from "./pages/Blogs";
import PhotoStories from "./pages/PhotoStories";
import VideoStories from "./pages/VideoStories";
import VideoStoriesSingle from "./sass/about_page/VideoStoriesSingle";
import Photostoriessingle from "./pages/Photostoriessingle";
import Aboutus from "./pages/Aboutus";
import Testimonials from "./pages/Testimonials";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/cart" element={<Photos />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/photostories" element={<PhotoStories />} />
          <Route path="/videostories" element={<VideoStories />} />
          <Route path="/videostoriessingle" element={<VideoStoriesSingle />} />
          <Route path="/photostoriessingle" element={<Photostoriessingle />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> */}
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
