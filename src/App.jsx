import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbars';
import './components/styles/App.css';
import HomePage from './components/Home';

function App() {
  return (
    <>
    <LoadingScreen />
    <Navbar />
    <HomePage />
    </>
  )
}

export default App