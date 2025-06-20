import { createRoot } from 'react-dom/client'
import './index.css'
import MainApp from "./page/MainPage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import 'react-slideshow-image/dist/styles.css';
import ContentPage from "./page/Content/ContentPage.tsx";
import VideoPage from "./component/Video/VideoPage.tsx";
import NavBarElement from "./component/NavBar/NavBar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
          <NavBarElement/>
          <Routes>
              <Route path="/" element={<MainApp />} />
              <Route path="/video/:page" element={<VideoPage />} />
              <Route path="/content/:page" element={<ContentPage />} />
              <Route path="/content/:page/:sub" element={<ContentPage />} />
              <Route path="/article/:page" element={<ContentPage />} />
              <Route path="/article/:page/:sub" element={<ContentPage />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
