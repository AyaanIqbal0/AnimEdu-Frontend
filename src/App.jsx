import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbars';
import './components/styles/App.css';
import HomePage from './components/Home';
import AboutPage from './components/About';
import CallToAaction from './components/Cta';
import Feautres from './components/Features';
import Footer from  './components/Footer';

function App() {
  return (
    <>
    <LoadingScreen />
    <Navbar />
    <HomePage />
    <AboutPage />
    <CallToAaction />
    <Feautres />
    <Footer />
    </>
  )
}

export default App