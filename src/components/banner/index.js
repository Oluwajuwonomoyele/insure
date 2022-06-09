import {Link} from 'react-scroll';
import './banner.styles.scss';
import imageDesktop from '../../images/how-we-work-desktop.svg';
import imageMobile from '../../images/how-we-work-mobile.svg';
import {useState } from 'react';
import useEvent from '../../useEvent';


const Banner = () => {
    const [mobile, setMobile] = useState(null)

    const handleMobileImage = () => {
        if(window.innerWidth < 768){
            setMobile(true)
        }else {
            setMobile(false)
        }
    }
    useEvent('resize', handleMobileImage);

    return ( 
        <section className='banner-section'>
            <div className="banner-container">
                <h1>Find out more<br /> about how we work</h1>
                <Link to='/' className='banner-btn'>how we work</Link>
                {mobile ? (
                    <img src={imageMobile} alt="banner bg" />
                ) : (
                    <img src={imageDesktop} alt="banner bg" />
                )}
            </div>
        </section>
     );
}
 
export default Banner;