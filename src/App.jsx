import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbars';
import HomePage from './components/Home';
import './components/styles/App.css';
import AboutPage from './components/About';
import CallToAaction from './components/Cta';
import Feautres from './components/Features';
import Footer from  './components/Footer';

export default function App() {
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
  );
}
