import heroImg from '../assets/hero-img.png'
import './styles/Home.css';



function HomePage() {
    const myTimeout2 = setTimeout(myGreeting2, 3800);
    function myGreeting2() {
        console.log("hello")
        document.getElementById("hero-img").classList.remove("hero-img2")
    }
    return (
        <>
            <div className="hero">
                <div className="hero-element hero-left">
                    <h1>Education with Animation</h1>
                    <h2>Learn DSA and other topics with fun animations that make tough ideas easy to understand.</h2>
                    <button className='log'>Log in / Sign up</button>
                </div>
                <div className="hero-element hero-right">
                    <img src={heroImg} id='hero-img' className='hero-img hero-img2' />
                </div>
            </div>
        </>
    )
}
export default HomePage;