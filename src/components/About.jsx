import './styles/About.css';
import {motion} from 'framer-motion';
import {fadein} from './styles/varientsAnimation';


function About() {
    
    
    

    return (
        <>
            <motion.div
            variants={fadein("left" ,"0.2")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true,amount: 0.7 }}
            className="about hidden">
                <div className="about-container">
                    <h1>About Us</h1>
                    <hr />
                    <h2>
                        We help you learn DSA and other essential topics with fun, easy-to-follow animations. Our goal is to simplify tough concepts. Test your skills with quizzes and coding questions, and grow as a programmer at any level.</h2>

                </div>

            </motion.div>

        </>
    )
}
export default About;