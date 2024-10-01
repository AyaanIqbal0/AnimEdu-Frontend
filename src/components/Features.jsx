import './styles/Features.css';
import {motion} from 'framer-motion';
import {fadein} from './styles/varientsAnimation';

function features() {
  return (
    <>
      <div className="steps-wrapper">
         
          <motion.div 
          variants={fadein("left" ,"0.2")}
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          className="steps-container1 thq-section-padding">
            <div className="steps-max-width thq-section-max-width">
              <div className="steps-container2 thq-grid-2">
                <div className="steps-section-header">
                  <h2 className="thq-heading-2">
                    Our Services
                  </h2>
                  <p className="thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="steps-actions">
                    <button className="thq-button-animated thq-button-filled steps-button">
                      <span className="thq-body-small">Learn More</span>
                    </button>
                  </div>
                </div>
                <div className="steps-container3">
                  <div className="steps-container4 thq-card">
                    <h2 className="thq-heading-2"><span>Explore Courses</span></h2>
                    <span className="steps-text14 thq-body-small">
                      <span>
                        Browse through our wide range of courses on data
                        structures and algorithms, and programming languages.
                      </span>
                    </span>
                    <label className="steps-text15 thq-heading-3">01</label>
                  </div>
                  <div className="steps-container5 thq-card">
                    <h2 className="thq-heading-2">
                      <span>Watch Animated Videos</span>
                    </h2>
                    <span className="steps-text17 thq-body-small">
                      <span>
                        Learn complex DSA and related concepts easily with our engaging animated
                        videos that simplify the learning process.
                      </span>
                    </span>
                    <label className="steps-text18 thq-heading-3">02</label>
                  </div>
                  <div className="steps-container6 thq-card">
                    <h2 className="thq-heading-2">
                      <span>Access Study Material</span>
                    </h2>
                    <span className="steps-text20 thq-body-small">
                      <span>
                        Get access to comprehensive study material that
                        reinforces your understanding of the topics covered.
                      </span>
                    </span>
                    <label className="steps-text21 thq-heading-3">03</label>
                  </div>
                  <div className="steps-container7 thq-card">
                    <h2 className="thq-heading-2">
                      <span>Track Your Progress by Quizes</span>
                    </h2>
                    <span className="steps-text23 thq-body-small">
                      <span>
                        Monitor your progress as you advance through the courses
                        and track your learning journey.
                      </span>
                    </span>
                    <label className="steps-text24 thq-heading-3">04</label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
    </>
  )
}

export default features;