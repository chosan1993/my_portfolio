import { useEffect } from "react";
import Aos from "aos";
import './App.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import About from "./components/UI/About";
import Education from "./components/UI/Education";
import Portfolio from "./components/UI/Portfolio";
import Experience from "./components/UI/Experience";
import Skills from "./components/UI/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;

