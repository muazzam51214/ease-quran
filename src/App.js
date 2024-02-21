import React, {useEffect} from 'react';
import  './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes,Route,useLocation} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Tutors from './components/Tutors';
import Courses from './components/Courses';
import Fee from './components/Fee';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Register from './components/Register';
import Footer from './components/Footer';
import Calltoaction from './components/subcomponents/Calltoaction';
import Privacypolicy from './components/Privacypolicy';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
       <Header/>
       <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/tutors" element={<Tutors/>} />
          <Route exact path="/courses" element={<Courses/>} />
          <Route exact path="/fee" element={<Fee/>} />
          <Route exact path="/faqs" element={<Faqs/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/privacy-policy" element={<Privacypolicy/>} />
          
        
      </Routes>
      <Calltoaction/>
      <Footer/>

    </Router>
  )
}

export default App
