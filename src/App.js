import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import ContactMe from './components/Contact Me/contactMe';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
