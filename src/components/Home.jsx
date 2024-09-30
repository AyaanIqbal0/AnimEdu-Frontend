import heroImg from '../assets/hero-img.png';
import './styles/Home.css';

function HomePage() {
  return (
    <div className="hero">
      <div className="hero-element hero-left">
        <h1>Education with Animation</h1>
        <h2>Learn DSA and other topics with fun animations that make tough ideas easy to understand.</h2>
        {/* Removed Clerk SignInButton */}
      </div>
      <div className="hero-element hero-right">
        <img src={heroImg} alt="" />
      </div>
      <div className="user-button">
        {/* Removed Clerk UserButton */}
      </div>
    </div>
  );
}

export default HomePage;
