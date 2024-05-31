import Navbar from './layouts/Navbar';
import '../main.css';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './layouts/Footer';
import { HeroParallax } from './components/ui/hero-parallax';
import projects from './data/projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HeroParallax projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
