import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Blank from './pages/Blank';
import Main from './pages/Main';
import './css/fonts/bootstrap/bootstrap.css';
import './css/bootstrap.css';
import axios from './api/axios';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// routes
import Router from 'src/routes';
// theme
import ThemeProvider from 'src/theme';
// components
import ScrollToTop from 'src/components/scroll-to-top';
import { ThemeSettings, SettingsProvider } from 'src/components/settings';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';




function App() {

  return (
    
      <HelmetProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <ScrollToTop />
          <ThemeProvider>
            <ThemeSettings>
              <MotionLazyContainer>
                {/* <Routes>
                  <Route path='/' element={<Blank/>} />
                  <Route path='/main' element={<Main/>} />
                </Routes> */}
                <Router />
              </MotionLazyContainer>
            </ThemeSettings>
          </ThemeProvider>
        </SettingsProvider>
        </LocalizationProvider>
      </HelmetProvider>
  );
}

export default App;
