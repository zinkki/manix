// eslint-disable-next-line
import "./css/main.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Blank from './pages/Blank';
import Main from './pages/Main';
import Admin from './pages/Admin';
import Error from './pages/Error';
import axios from "axios";


// import "./css/main.css";
// import "./vendors/font-awesome/css/font-awesome.css";
// import './vendors/owl-carousel/dist/assets/owl.carousel.min.css';
// import './vendors/owl-carousel/dist/assets/owl.theme.default.min.css';
// import './vendors/animate/animate.css';
// import './vendors/rateyo/jquery.rateyo.css';
// import './vendors/bootstrap-datepicker/css/bootstrap-datepicker.css';
// import './vendors/fancyBox/source/jquery.fancybox.css';
// import './vendors/fancyBox/source/helpers/jquery.fancybox-thumbs.css';
// import './css/bootstrap.css';
// import './vendors/rev-slider/revolution/css/settings.css';
// import './vendors/rev-slider/revolution/css/layers.css';
// import './vendors/rev-slider/revolution/css/navigation.css';

function App() {
  const [data, setData] = useState([
    {
      idx: 0,
      user_name: "",
      company_name: "",
      company_dept: "",
      labtime: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/list")
      .then((res) => {
        console.log(res.data);
        console.log("axios success!");
      })
      .catch(() => console.log("err...."));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Blank/>} /> {/* Loading */}
        <Route path="/main/*" element={<Main/>} /> {/* Main */}
        <Route path="/admin/*" element={<Admin/>} /> {/* Admin */}
        <Route path="*" element={<Error/>} /> {/* Error */}
      </Routes>


    </>
  );
}

export default App;
