import './styles/Navbars.css';
import logo from '../assets/logo.png';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/clerk-react';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="left-icons">
                    <div className="logo">
                        <img src={logo} className='logo-png' alt="Logo" /> 
                    </div>
                </div>
                <div className="right-icons">
                    <div>
                        <input type="checkbox" id="active" />
                        <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
                        <div className="wrapper">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <SignedIn>
                                    <li><SignOutButton className="logout-btn">Logout</SignOutButton></li>
                                </SignedIn>
                                <SignedOut>
                                    <li><a href="#">Login</a></li>
                                </SignedOut>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
