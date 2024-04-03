import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/boxicons/dist/boxicons'
import '../node_modules/boxicons/css/boxicons.min.css'
import 'aos/dist/aos.css';
import AOS from 'aos'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Direction from "./pages/Direction";
import Dayjest from "./pages/Dayjest";
import Untitled from "./pages/Untitled";
import AllDirection from "./pages/AllDirection";
function App() {
  useEffect(()=>{
    AOS.init();
});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/direction" element={<Direction/>}/>
          <Route path="/all_direction" element={<AllDirection/>}/>
          <Route path="/dayjest" element={<Dayjest/>}/>
          <Route path='/untitled' element={<Untitled />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
