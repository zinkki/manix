import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import MainLayout from "../components/MainLayout";
import PortfolioDetail from "./PorfolioDetail";
import Footer from "../components/Foooter";

export default function Main() {
  return (
    <>
      <div id="wrapper" class="no-overflow-x">
        <div class="page-wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="portfolio" element={<PortfolioDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
