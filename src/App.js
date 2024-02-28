
// import './App.css';

import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
    </>
  );
}

export default App;
