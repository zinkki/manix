import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import MainLayout from "../components/MainLayout";
import Footer from "../components/Foooter";
//import jQuery from "jquery";
//window.$ = window.jQuery = jQuery;
import Helmet from 'react-helmet-async';

export default function Main() {
  return (
    <>
    <Helmet>
      <title>Landing | ZONE UI</title>
    </Helmet>

      {/* <div id="wrapper" class="no-overflow-x">
        <div class="page-wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </div>
        <Footer />
      </div> */}
    </>
  );
}

   
          
 