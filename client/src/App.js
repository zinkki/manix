/*eslint no-undef: "error"*/
// eslint-disable-next-line
import "./css/main.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Blank from './pages/Blank';
import Main from './pages/Main';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import PortfolioDetail from "./pages/PorfolioDetail";
import Example01 from "./pages/Example01";
import Example02 from "./pages/Example02";
import Example03 from "./pages/Example03";
import Example04 from "./pages/Example04";
import Example05 from "./pages/Example05";
import Example06 from "./pages/Example06";
import Error from './pages/Error';
import axios from './api/axios';


function App() {
  const [data, setData] = useState([
    {
      idx: 0,
      content :''
    },
  ]);
  useEffect(() => {
    axios
      .get('/api/list')
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
        <Route path="/auto-admin/*" element={<AdminLogin/>} /> {/* Admin */}
        <Route path="/portfolio/*" element={<PortfolioDetail />} />
        <Route path="/portfolio1" element={<Example01 />} />
        <Route path="/portfolio2" element={<Example02 />} />
        <Route path="/portfolio3" element={<Example03 />} />
        <Route path="/portfolio4" element={<Example04 />} />
        <Route path="/portfolio5" element={<Example05 />} />
        <Route path="/portfolio6" element={<Example06 />} />
        <Route path="*" element={<Error/>} /> {/* Error */}
      </Routes>


    </>
  );
}

export default App;
