import { footer } from 'framer-motion/client';
import './styles/Footer.css';
const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>AnimeEdu</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Log in</a></li>
                                <li><a href="#">Sign in</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">animeedu@gmail.com</a></li>
                                
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Copyrights</h4>
                            <ul>
                                <li><a href="#">All right reserved</a></li>
                                <li><a href="#">to AnimeEdu</a></li>
                                <li><a href="#">© Copyright</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;