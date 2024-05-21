import React, { useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Portfolio from "./components/portfolio/Portfolio";
import Details from "./components/details/Details";
import { motion, useInView } from 'framer-motion';

function App() {
  

  return (
    <div>
      <PerfectScrollbar onScrollDown={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
        <Navbar />
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.25 }}>
          <Intro />
          <About />
          <Portfolio />
          <Details />
          <Contact />
          <Footer />
        </motion.div>
      </PerfectScrollbar>
    </div>
  );
}

export default App;
