import Navbar from './layouts/Navbar';
import '../main.css';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './layouts/Footer';
import { HeroParallax } from './components/ui/hero-parallax';
import projects from './data/projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HeroParallax projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
