import React, { useEffect } from "react";
import {QueryClientProvider,QueryClient} from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
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
import News from "./pages/news";
import NewsOne from "./components/news/NewsOne";
import Test from "./pages/adminka/test";
import Results from "./pages/results";
function App() {
  useEffect(()=>{
    AOS.init();
});

    const client = new QueryClient();

    return (
    <BrowserRouter>
        <QueryClientProvider client={client}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/test" element={<Test/>}/>

                    <Route path="/direction" element={<Direction/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/results" element={<Results/>}/>
                    <Route path="/nuwsOne" element={<NewsOne/>}/>
                    <Route path="/all_direction" element={<AllDirection/>}/>
                    <Route path="/dayjest" element={<Dayjest/>}/>
                    <Route path='/untitled' element={<Untitled />}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
