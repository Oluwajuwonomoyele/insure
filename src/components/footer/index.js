import "./footer.styles.scss";
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import pinterest from '../../images/pinterest.svg';
import intsagram from '../../images/instagram.svg';
import {Link} from "react-scroll";
import footerDesktop from '../../images/footer-desktop.svg';
import footerMobile from '../../images/footer-mobile.svg';
import { useState } from "react";
import useEvent from "../../useEvent";


const Footer = () => {
    const [mobile, setMobile] = useState(false);

    const handleMobile = () => {
        if(window.innerWidth < 768){
            setMobile(true)
        }else {
            setMobile(false)
        }
    }
    useEvent('resize', handleMobile)

    return ( 
        <footer>
            {mobile ? (
                <img src={footerMobile} className='footer-bg'/>
            ):(
                <img src={footerDesktop} className='footer-bg'/>
            )}
            <div className="footer-container">
                <div className="heading">
                    <Link to='/' className="logo">insure</Link>
                    <div className="socials">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={intsagram} alt="instagram" />
                    </div>
                </div>
                <hr />
                <div className="links">
                    <div className="col">
                        <h3>our company</h3>

                        <Link to='/'>how we work</Link>
                        <Link to='/'>why insure?</Link>
                        <Link to='/'>view plans</Link>
                        <Link to='/'>reviews</Link>
                    </div>
                    <div className="col">
                        <h3>help me</h3>

                        <Link to='/'>faq</Link>
                        <Link to='/'>terms of use</Link>
                        <Link to='/'>privacy policy</Link>
                        <Link to='/'>cookies</Link>
                    </div>
                    <div className="col">
                        <h3>contact</h3>

                        <Link to='/'>sales</Link>
                        <Link to='/'>support</Link>
                        <Link to='/'>live chat</Link>
                    </div>
                    <div className="col">
                        <h3>others</h3>

                        <Link to='/'>careers</Link>
                        <Link to='/'>press</Link>
                        <Link to='/'>licenses</Link>
                    </div>
                </div>

                <div class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Olutomisin Oluwajuwon</a>.
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;