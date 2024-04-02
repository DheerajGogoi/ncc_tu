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
import ContactUs from './pages/ContactUs';
import Achievements from './pages/Achievements';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ncc/react/" element={<Navigate to="/ncc/react/home" />} />
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path="/ncc/react/home" element={<Home />} />
        {/* <Route path="/achievements" element={<Achievements />} /> */}
        <Route path="/ncc/react/achievements" element={<Achievements />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/ncc/react/people" element={<People />} />
        {/* <Route path="/people" element={<People />} /> */}
        <Route path="/ncc/react/activities" element={<Activites />} />
        {/* <Route path="/activities" element={<Activites />} /> */}
        <Route path="/ncc/react/activities/:blog_id" element={<ActivityDetails />} />
        {/* <Route path="/activities/:blog_id" element={<ActivityDetails />} /> */}
        <Route path="/ncc/react/annual_reports" element={<AnnualReport />} />
        {/* <Route path="/annual_reports" element={<AnnualReport />} /> */}
        <Route path="/ncc/react/about" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/ncc/react/gallery" element={<ImageGallery />} />
        {/* <Route path="/gallery" element={<ImageGallery />} /> */}
        <Route path="/ncc/react/notifications" element={<Notifications />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/ncc/react/contact" element={<ContactUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
