
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2026 <a className='text-blue-400 hover:text-blue-300' href="https://www.linkedin.com/in/lucas-medran-dev/">Lucas Medran</a>. Todos los derechos reservados.
            </p>
            <p className="text-white-500 text-sm mt-2">
              Transformando ideas en código, creando experiencias digitales únicas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;