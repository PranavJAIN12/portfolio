
// import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
    <PerfectScrollbar onScrollDown={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </PerfectScrollbar>
    </>
  );
}

export default App;
