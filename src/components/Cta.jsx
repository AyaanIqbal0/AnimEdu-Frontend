import './styles/Cta.css'
import {motion} from 'framer-motion';
import {fadein} from './styles/varientsAnimation';
function callToAaction (){
    return (
        <>
        <motion.div
        variants={fadein("left" ,"0.2")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true,amount: 0.7 }}
        className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="">
                    <h1>Start Learning Today!</h1>
                  </span>
                  <p className="thq-body-large">
                    <span>
                      Join AnimEdu now to access our free animated videos and
                      study materials on DSA and programming languages.
                    </span>
                  </p>
                </div>
                <div className="cta-actions">
                  <button type="button" className="thq-button-filled cta-button">
                    <span>Sign Up for Free</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
        </>
    )
}

export default callToAaction ;