import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import People from './pages/People';
import Activites from './pages/Activites';
import ActivityDetails from './pages/ActivityDetails';
import AnnualReport from './pages/AnnualReport';
import About from './pages/About';
import ImageGallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/activities/:blog_id" element={<ActivityDetails />} />
        <Route path="/annual_reports" element={<AnnualReport />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
