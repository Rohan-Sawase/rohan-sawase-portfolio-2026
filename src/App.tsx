import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </ThemeProvider>
  );
}
