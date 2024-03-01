
// import './App.css';

import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
