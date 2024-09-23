import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbars';
import HomePage from './components/Home';
import './components/styles/App.css';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <HomePage />
    </>
  );
}
