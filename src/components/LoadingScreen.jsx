
import './styles/LoadingScreen.css';

function LoadingScreen(){
    const myTimeout = setTimeout(myGreeting, 2300);
    function myGreeting(){
        document.getElementById("main").classList.add("none");
        
    }
    return(
        <>
        <div id="main" className="screen">
            <div className="wrapperLoading">
                <div className="bar">
                <div className="circle"></div>
                
                <p>AnimEdu</p>
                </div>
            </div>
            <p className="slogan">Education with Animation</p>
        </div>
        
        </>
    )
}
export default LoadingScreen;