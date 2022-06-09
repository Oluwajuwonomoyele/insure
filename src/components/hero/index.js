import "./hero.styles.scss";
import { Link } from 'react-scroll';
import mobileIntro from '../../images/image-intro-mobile.jpg';
import desktopIntro from '../../images/image-intro-desktop.jpg';
import { useState } from "react";
import introLeft from '../../images/intro-left-desktop.svg';
import introRight from '../../images/intro-right-desktop.svg';
import introLeftMobile from '../../images/intro-left-mobile.svg';
import introRightMobile from '../../images/intro-right-mobile.svg';
import useEvent from "../../useEvent";

const Hero = () => {
    const [mobile, setMobile] = useState(false);

    const handleImage = () => {
        if(window.innerWidth < 768){
            setMobile(true)
        }else {
            setMobile(false)
        }
    }
    useEvent('DOMContentLoaded', handleImage)

    return ( 
        <>
            <section className="hero-section">
                <img src={introRight} className="top-right"/>
                <img src={introLeft} className="bottom-left" />
                <div className="hero-container">
                    <div className="col hero-content">
                        <img src={introLeftMobile} alt="" className="mobile-left" />
                        <h1>Humanizing your insurance.</h1>
                        <p> Get your life insurance coverage easier and    faster. We blend our expertise 
                            and technology to help you find the plan that’s right for you. Ensure you 
                            and your loved ones are protected.
                        </p>
                        <Link to='/' className='hero-btn'>view plans</Link>
                        <img src={introRightMobile} alt="" className="mobile-right"/>
                    </div>
                    <div className="col">
                        {mobile ? (
                            <img src={mobileIntro} alt="intro image" />
                        ) : (
                            <img src={desktopIntro} alt="intro image" />
                        )}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;