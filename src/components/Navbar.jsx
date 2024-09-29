import './styles/Navbar.css';
function Nav(){
    return (
    <>
    <div className='navbar-dim'>

    <div className="Navbar">
        <div className="logo">
            <img src={require('../img/logo.png')} />
        </div>
        <div>
            <input type="checkbox" id="active" />
            <label for="active" className="menu-btn"><i className="fas fa-bars"></i></label>
            <div className="wrapper">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>

        
    </div>
    
    
    </>
    );
}
export default Nav;