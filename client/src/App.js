// eslint-disable-next-line
import "./css/main.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Blank from './pages/Blank';
import Main from './pages/Main';
import Admin from './pages/Admin';
import Error from './pages/Error';
import axios from "axios";

function App() {
  const [data, setData] = useState([
    {
      idx: 0,
      content :''
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
